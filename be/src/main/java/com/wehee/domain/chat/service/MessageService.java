package com.wehee.domain.chat.service;

import com.wehee.api.chat.dto.MessageDto;
import com.wehee.api.chat.dto.NewMessageRequestDto;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.chat.exception.ChatRoomNotExistException;
import com.wehee.domain.chat.exception.MessageNotFoundException;
import com.wehee.domain.chat.repository.ChatRoomRepository;
import com.wehee.domain.chat.repository.MessageRepository;
import com.wehee.domain.chat.utils.ChatSystemMessage;
import com.wehee.domain.chat.utils.ChatUtil;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.service.UserService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class MessageService {

    private final SimpMessagingTemplate webSocketMessagingTemplate;
    private final RedisTemplate<String, String> redisTemplate;

    private final UserService userService;
    private final ChatRoomRepository chatRoomRepository;
    private final MessageRepository messageRepository;

    public InstantMessage findById(Long id) {
        return messageRepository.findById(id).orElseThrow(
            MessageNotFoundException::new
        );
    }

    public List<MessageDto> describeAllMessages(Long chatRoomId) {
        List<InstantMessage> messages = messageRepository.findByChatRoomId(chatRoomId);
        return messages.stream()
            .map(MessageDto::from)
            .collect(Collectors.toList());
    }

    public void sendSystemMessage(ChatRoom chatRoom, ChatSystemMessage message) {
        InstantMessage instantMessage = InstantMessage.create(chatRoom, message.getMessage());
        messageRepository.save(instantMessage);

        redisTemplate.opsForValue().set(String.valueOf(chatRoom.getId()), String.valueOf(instantMessage.getId()));

        webSocketMessagingTemplate.convertAndSend(
                ChatUtil.message(String.valueOf(chatRoom.getId())), instantMessage);
    }

    @Transactional
    public List<MessageDto> sendMessage(String chatRoomId, NewMessageRequestDto requestDto) {
        ChatRoom chatRoom = chatRoomRepository.findById(Long.parseLong(chatRoomId))
                .orElseThrow(ChatRoomNotExistException::new);
        User user = userService.getAuthenticatedUser();
        InstantMessage message = InstantMessage.create(chatRoom, requestDto.getMessage());
        message.updateInfo(chatRoom, user);
        messageRepository.save(message);

        redisTemplate.opsForValue().set(chatRoomId, String.valueOf(message.getId()));

        webSocketMessagingTemplate.convertAndSend(
                ChatUtil.message(chatRoomId), message);

        return describeAllMessages(Long.parseLong(chatRoomId));
    }

    public void sendMessage(InstantMessage instantMessage, String chatRoomId, String providerId) {
        ChatRoom chatRoom = chatRoomRepository.findById(Long.parseLong(chatRoomId)).orElseThrow(
                ChatRoomNotExistException::new);
        User user = userService.getUserByProviderId(providerId);

        instantMessage.updateInfo(chatRoom, user);
        messageRepository.save(instantMessage);

        redisTemplate.opsForValue().set(chatRoomId, String.valueOf(instantMessage.getId()));

        webSocketMessagingTemplate.convertAndSend(
                ChatUtil.message(String.valueOf(chatRoom.getId())), instantMessage);
    }
}
