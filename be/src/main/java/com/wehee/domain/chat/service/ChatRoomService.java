package com.wehee.domain.chat.service;

import com.wehee.api.chat.dto.ChatRoomCreateRequestDto;
import com.wehee.api.chat.dto.ChatRoomInfoResponseDto;
import com.wehee.api.chat.dto.ChatRoomResponseDto;
import com.wehee.api.chat.dto.ChatRoomSearchCondition;
import com.wehee.api.chat.dto.ChatRoomUpdateRequestDto;
import com.wehee.api.chat.dto.MyChatRoomInfoResponseDto;
import com.wehee.api.chat.dto.MyChatRoomResponseDto;
import com.wehee.config.properties.ChatProperties;
import com.wehee.domain.chat.entity.ChatCategory;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.chat.entity.RoleStatus;
import com.wehee.domain.chat.entity.UserTag;
import com.wehee.domain.chat.exception.ChatRoomLimitNotReducibleException;
import com.wehee.domain.chat.exception.ChatRoomNotExistException;
import com.wehee.domain.chat.exception.ChatRoomOutcastedException;
import com.wehee.domain.chat.exception.ChatRoomParticipantLimitException;
import com.wehee.domain.chat.exception.InvalidChatRoomAccessException;
import com.wehee.domain.chat.exception.MessageNotFoundException;
import com.wehee.domain.chat.repository.ChatRoomRepository;
import com.wehee.domain.chat.repository.MessageRepository;
import com.wehee.domain.chat.utils.ChatSystemMessage;
import com.wehee.domain.chat.utils.ChatUtil;
import com.wehee.domain.user.entity.Gender;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.service.UserService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ChatRoomService {

    private final ChatProperties chatProperties;

    private final RedisTemplate<String, String> redisTemplate;
    private final SimpMessagingTemplate webSocketMessagingTemplate;

    private final UserService userService;
    private final MessageService messageService;
    private final ChatRoomRepository chatRoomRepository;

    /*
     * CREATE CHAT ROOM
     */

    public ChatRoom createChatRoom(ChatRoomCreateRequestDto requestDto) {
        ChatRoom chatRoom = ChatRoom.from(requestDto);
        User user = userService.getAuthenticatedUser();
        UserTag userTag = UserTag.create(chatRoom, user, RoleStatus.OWNER);
        chatRoom.addJoinedUser(userTag);
        chatRoomRepository.save(chatRoom);

        messageService.sendSystemMessage(chatRoom, ChatSystemMessage.NEW_CHAT);
        return chatRoom;
    }

    public boolean checkCreationAvailable() {
        int limit = chatProperties.getChatRoomJoinLimit();
        User user = userService.getAuthenticatedUser();

        if (!user.isJoinedLessThen(limit)) {
            throw new ChatRoomParticipantLimitException(limit);
        }
        return true;
    }

    /*
     * JOIN/LEAVE CHAT ROOM
     */

    public void joinOrActivateChatRoom(Long chatRoomId) {
        User user = userService.getAuthenticatedUser();
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
            ChatRoomNotExistException::new);

        UserTag joinedUser = chatRoom.findUser(user);

        if (joinedUser == null) {
            joinChatRoom(chatRoom, user);
        }

        if (RoleStatus.isOutcasted(joinedUser)) {
            throw new ChatRoomOutcastedException();
        }
    }

    @Transactional
    public void joinChatRoom(ChatRoom chatRoom, User user) {
        UserTag userTag = UserTag.create(chatRoom, user, RoleStatus.MEMBER);
        chatRoom.addJoinedUser(userTag);
        updateJoinedUsersViaWebSocket(chatRoom);
    }

    @Transactional
    public void closeOrLeaveChatRoom(Long chatRoomId) {
        User user = userService.getAuthenticatedUser();
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
            ChatRoomNotExistException::new);

        if (chatRoom.findOwner().getProviderId().equals(user.getProviderId())) {
            chatRoom.close();
        } else {
            chatRoom.leave(user);
            updateJoinedUsersViaWebSocket(chatRoom);
        }
    }

    /*
     * GET CHAT ROOM INFORMATION
     */

    public ChatRoomInfoResponseDto describeChatRoomInfo(Long chatRoomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
            ChatRoomNotExistException::new);
        return ChatRoomInfoResponseDto.from(chatRoom);
    }

    /*
     * UPDATE CHAT ROOM INFORMATION
     */

    @Transactional
    public ChatRoomResponseDto updateChatRoomInfo(Long chatRoomId, ChatRoomUpdateRequestDto requestDto) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
            ChatRoomNotExistException::new);

        if (chatRoom.getJoinedUserNumber() > requestDto.getLimit()) {
            throw new ChatRoomLimitNotReducibleException();
        }

        chatRoom.updateInfo(
            requestDto.getTitle(),
            ChatCategory.valueOf(requestDto.getCategory()),
            requestDto.getLimit());

        return ChatRoomResponseDto.from(chatRoom);
    }

    @Transactional
    public void updateChatRoomAnnouncement(Long chatRoomId, String announcement) {
        User user = userService.getAuthenticatedUser();
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
            ChatRoomNotExistException::new);

        if (!chatRoom.findOwner().getProviderId().equals(user.getProviderId())) {
            throw new InvalidChatRoomAccessException();
        }

        chatRoom.updateAnnouncement(announcement);
    }

    /*
     * FIND CHAT ROOM
     */

    public List<ChatRoomResponseDto> findByCategoriesAndKeyword(ChatRoomSearchCondition condition) {
        List<ChatCategory> categories = condition.mapCategories();
        String keyword = condition.getKeyword();

        User user = userService.getAuthenticatedUser();
        List<Gender> genders = new ArrayList<>();
        genders.add(user.getGender());
        genders.add(Gender.ALL);

        if (categories == null && keyword == null) {
            return findByUserCondition(user, genders);
        }

        if (categories == null) {
            return findByUserConditionAndKeyword(user, genders, keyword);
        }

        if (keyword == null) {
            return findByUserConditionAndCategory(user, genders, categories);
        }

        return findByAllCondition(user, genders, keyword, categories);
    }

    public List<MyChatRoomInfoResponseDto> findMyChatRooms() {
        User user = userService.getAuthenticatedUser();
        List<MyChatRoomInfoResponseDto> responseDtos = new ArrayList<>();
        Date now = new Date();

        for (UserTag userTag : user.getUserTags()) {
            if (RoleStatus.isParticipating(userTag.getRoleStatus())) {
                String chatRoomId = String.valueOf(userTag.getChatRoom().getId());
                String messageId = redisTemplate.opsForValue().get(chatRoomId);
                InstantMessage message = messageService.findById(Long.parseLong(messageId));
                responseDtos.add(MyChatRoomInfoResponseDto.from(userTag, message, now));
            }
        }

        return responseDtos;
    }

    public MyChatRoomResponseDto findMyChatRoom(Long chatRoomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
                ChatRoomNotExistException::new
        );

        return MyChatRoomResponseDto.from(chatRoom);
    }

    private List<ChatRoomResponseDto> findByUserCondition(User user, List<Gender> genders) {
        List<ChatRoom> chatRooms = chatRoomRepository.findByUserCondition(genders, user.getAge());

        return chatRooms.stream()
                .filter(c -> c.getTargetMbtis().contains(user.getMbti()))
                .map(ChatRoomResponseDto::from)
                .collect(Collectors.toList());
    }

    private List<ChatRoomResponseDto> findByUserConditionAndKeyword(User user, List<Gender> genders, String keyword) {
        List<ChatRoom> chatRooms = chatRoomRepository.findByUserConditionAndKeyword(genders, user.getAge(), keyword);

        return chatRooms.stream()
                .filter(c -> c.getTargetMbtis().contains(user.getMbti()))
                .map(ChatRoomResponseDto::from)
                .collect(Collectors.toList());
    }

    private List<ChatRoomResponseDto> findByUserConditionAndCategory(User user, List<Gender> genders, List<ChatCategory> categories) {
        List<ChatRoom> chatRooms = chatRoomRepository.findByUserConditionAndCategory(genders, user.getAge(), categories);

        return chatRooms.stream()
                .filter(c -> c.getTargetMbtis().contains(user.getMbti()))
                .map(ChatRoomResponseDto::from)
                .collect(Collectors.toList());
    }

    private List<ChatRoomResponseDto> findByAllCondition(User user, List<Gender> genders, String keyword, List<ChatCategory> categories) {
        List<ChatRoom> chatRooms = chatRoomRepository.findByAllCondition(genders, user.getAge(), keyword, categories);

        return chatRooms.stream()
                .filter(c -> c.getTargetMbtis().contains(user.getMbti()))
                .map(ChatRoomResponseDto::from)
                .collect(Collectors.toList());
    }

    public ChatRoom findByChatRoomId(Long chatRoomId) {
        return chatRoomRepository.findById(chatRoomId).orElseThrow(
                ChatRoomNotExistException::new);
    }

    /*
     * WEB SOCKET
     */

    private void updateJoinedUsersViaWebSocket(ChatRoom chatRoom) {
        webSocketMessagingTemplate.convertAndSend(
            ChatUtil.connectedUsers(String.valueOf(chatRoom.getId())),
            chatRoom.describeJoinedUser()
        );
    }
}
