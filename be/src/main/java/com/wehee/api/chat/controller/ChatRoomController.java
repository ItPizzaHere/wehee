package com.wehee.api.chat.controller;

import com.wehee.api.chat.dto.ChatRoomCreateRequestDto;
import com.wehee.api.chat.dto.ChatRoomInfoResponseDto;
import com.wehee.api.chat.dto.ChatRoomResponseDto;
import com.wehee.api.chat.dto.ChatRoomUpdateRequestDto;
import com.wehee.common.ApiResponse;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.chat.exception.ChatRoomExceedLimitException;
import com.wehee.domain.chat.exception.ChatRoomParticipantLimitException;
import com.wehee.domain.chat.service.ChatRoomService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/chat")
@RequiredArgsConstructor
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public ApiResponse<String> createChatRoom(@Valid @RequestBody ChatRoomCreateRequestDto requestDto) {
        ChatRoom chatRoom;
        try {
            chatRoom = chatRoomService.createChatRoom(requestDto);
        } catch (ChatRoomExceedLimitException e) {
            return ApiResponse.fail(e.getMessage());
        }
        return ApiResponse.success("chatroom", String.valueOf(chatRoom.getId()));
    }

    @GetMapping("/info/{chatroom_id}")
    public ApiResponse<ChatRoomInfoResponseDto> describeChatRoomInfo(@PathVariable("chatroom_id") String chatRoomId) {
        ChatRoomInfoResponseDto responseDto = chatRoomService.describeChatRoomInfo(Long.valueOf(chatRoomId));
        return ApiResponse.success("chatroom", responseDto);
    }

    @PutMapping("/close/{chatroom_id}")
    public ApiResponse<Boolean> closeOrLeaveChatRoom(@PathVariable("chatroom_id") String chatRoomId) {
        chatRoomService.closeOrLeaveChatRoom(Long.valueOf(chatRoomId));
        return ApiResponse.success("result", true);
    }

    @PutMapping("/update/{chatroom_id}")
    public ApiResponse<ChatRoomResponseDto> updateChatRoomInfo(@PathVariable("chatroom_id") String chatRoomId,
        @Valid @RequestBody ChatRoomUpdateRequestDto requestDto) {
        ChatRoomResponseDto responseDto = chatRoomService.updateChatRoomInfo(Long.valueOf(chatRoomId), requestDto);
        return ApiResponse.success("chatroom", responseDto);
    }

    @PutMapping("/announce/{chatroom_id}")
    public ApiResponse<Boolean> updateChatRoomAnnouncement(@PathVariable("chatroom_id") String chatRoomId,
        @RequestBody String announcement) {
        chatRoomService.updateChatRoomAnnouncement(Long.valueOf(chatRoomId), announcement);
        return ApiResponse.success("result", true);
    }

    @RequestMapping("/join/{chatroom_id}")
    public void joinChatRoom(@PathVariable("chatroom_id") String chatRoomId) {
        chatRoomService.joinOrActivateChatRoom(Long.valueOf(chatRoomId));
    }

    @GetMapping("/check")
    public ApiResponse<Boolean> checkCreationAvailable() {
        try {
            chatRoomService.checkCreationAvailable();
        } catch (ChatRoomParticipantLimitException e) {
            return ApiResponse.fail(e.getMessage());
        }
        return ApiResponse.success("result", true);
    }
}
