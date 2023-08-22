package com.wehee.domain.voice.service;

import com.wehee.api.voice.dto.VoiceRoomCreateRequestDto;
import com.wehee.api.voice.dto.VoiceRoomInfoResponseDto;
import com.wehee.api.voice.dto.VoiceRoomResponseDto;
import com.wehee.api.voice.dto.VoiceRoomSearchCondition;
import com.wehee.api.voice.dto.VoiceRoomUpdateRequestDto;
import com.wehee.domain.voice.exception.VoiceRoomLimitNotReducibleException;
import com.wehee.domain.voice.exception.VoiceRoomNotExistException;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.service.UserService;
import com.wehee.domain.voice.entity.VoiceRoleStatus;
import com.wehee.domain.voice.entity.VoiceRoom;
import com.wehee.domain.voice.entity.VoiceUserTag;
import com.wehee.domain.voice.repository.VoiceRoomRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class VoiceRoomService {

//    private final ChatProperties chatProperties;
//    private final SimpMessagingTemplate webSocketMessagingTemplate;

    private final UserService userService;
    private final VoiceRoomRepository voiceRoomRepository;

    /*
     * CREATE VOICE ROOM
     */

    public VoiceRoom createVoiceRoom(VoiceRoomCreateRequestDto requestDto) {
        VoiceRoom voiceRoom = VoiceRoom.from(requestDto);
        User user = userService.getAuthenticatedUser();
        VoiceUserTag voiceUserTag = VoiceUserTag.create(voiceRoom, user, VoiceRoleStatus.OWNER);
        voiceRoom.addJoinedUser(voiceUserTag);
        voiceRoomRepository.save(voiceRoom);
        return voiceRoom;
    }

//    public boolean checkCreationAvailable() {
//        int limit = chatProperties.getChatRoomJoinLimit();
//        User user = userService.getAuthenticatedUser();
//
//        if (!user.isJoinedLessThen(limit)) {
//            throw new ChatRoomParticipantLimitException(limit);
//        }
//        return true;
//    }

    /*
     * JOIN/LEAVE VOICE ROOM
     */

    @Transactional
    public void joinVoiceRoom(Long voiceRoomId) {
        User user = userService.getAuthenticatedUser();
        VoiceRoom voiceRoom = voiceRoomRepository.findById(voiceRoomId).orElseThrow(
            VoiceRoomNotExistException::new);

        VoiceUserTag voiceUserTag = VoiceUserTag.create(voiceRoom, user, VoiceRoleStatus.LISTENER);
        voiceRoom.addJoinedUser(voiceUserTag);
//        updateJoinedUsersViaWebSocket(voiceRoom);
    }

    @Transactional
    public void closeOrLeaveVoiceRoom(Long voiceRoomId) {
        User user = userService.getAuthenticatedUser();
        VoiceRoom voiceRoom = voiceRoomRepository.findById(voiceRoomId).orElseThrow(
            VoiceRoomNotExistException::new);

        if (voiceRoom.findOwner().getProviderId().equals(user.getProviderId())) {
            voiceRoom.close();
        } else {
            voiceRoom.leave(user);
//            updateJoinedUsersViaWebSocket(voiceRoom);
        }
    }

    /*
     * GET VOICE ROOM INFORMATION
     */

    public VoiceRoomInfoResponseDto describeVoiceRoomInfo(Long voiceRoomId) {
        VoiceRoom voiceRoom = voiceRoomRepository.findById(voiceRoomId).orElseThrow(
            VoiceRoomNotExistException::new);
        return VoiceRoomInfoResponseDto.from(voiceRoom);
    }



    /*
     * UPDATE VOICE ROOM INFORMATION
     */

    @Transactional
    public VoiceRoomResponseDto updateVoiceRoomInfo(Long voiceRoomId, VoiceRoomUpdateRequestDto requestDto) {
        VoiceRoom voiceRoom = voiceRoomRepository.findById(voiceRoomId).orElseThrow(
            VoiceRoomNotExistException::new);

        if (voiceRoom.getJoinedUserNumber() > requestDto.getLimit()) {
            throw new VoiceRoomLimitNotReducibleException();
        }

        voiceRoom.updateInfo(
            requestDto.getTitle(),
            requestDto.getDescription(),
            requestDto.getLimit());

        return VoiceRoomResponseDto.from(voiceRoom);
    }

    /*
     * FIND VOICE ROOM
     */

    public List<VoiceRoomResponseDto> findByKeyword(VoiceRoomSearchCondition condition) {
        List<VoiceRoom> voiceRooms = voiceRoomRepository.findByKeyword(condition.getKeyword());

        return voiceRooms.stream()
            .map(VoiceRoomResponseDto::from)
            .collect(Collectors.toList());
    }

//    public MyChatRoomResponseDto findMyChatRoom(Long chatRoomId) {
//        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
//                ChatRoomNotExistException::new
//        );
//
//        return MyChatRoomResponseDto.from(chatRoom);
//    }

    public VoiceRoom findByVoiceRoomId(Long voiceRoomId) {
        return voiceRoomRepository.findById(voiceRoomId).orElseThrow(
                VoiceRoomNotExistException::new);
    }

    /*
     * WEB SOCKET
     */

//    private void updateJoinedUsersViaWebSocket(ChatRoom chatRoom) {
//        webSocketMessagingTemplate.convertAndSend(
//            ChatUtil.connectedUsers(String.valueOf(chatRoom.getId())),
//            chatRoom.describeJoinedUser()
//        );
//    }
}
