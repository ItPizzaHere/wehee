package com.wehee.api.chat.controller;

import com.wehee.api.chat.dto.ChatRoomUpdateRequestDto;
import com.wehee.api.chat.dto.MessageDto;
import com.wehee.api.chat.dto.MyChatRoomInfoResponseDto;
import com.wehee.api.chat.dto.MyChatRoomResponseDto;
import com.wehee.api.chat.dto.NewMessageRequestDto;
import com.wehee.common.ApiResponse;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.chat.service.ChatRoomService;
import com.wehee.domain.chat.service.MessageService;
import com.wehee.domain.user.entity.UserProfile;
import java.security.Principal;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("api/v1/mychat")
@RequiredArgsConstructor
public class MyChatRoomController {

    private final ChatRoomService chatRoomService;
    private final MessageService messageService;

    @GetMapping
    public List<MyChatRoomInfoResponseDto> findMyChatRooms() {
        return chatRoomService.findMyChatRooms();
    }

    @GetMapping("/{chat_room_id}")
    public ApiResponse<MyChatRoomResponseDto> findMyChatRoom(@PathVariable("chat_room_id") String chatRoomId) {
        MyChatRoomResponseDto responseDto = chatRoomService.findMyChatRoom(Long.parseLong(chatRoomId));
        return ApiResponse.success("chatroom", responseDto);
    }

    @GetMapping("/messages/{chat_room_id}")
    public List<MessageDto> findMyChatRoomMessages(@PathVariable("chat_room_id") String chatRoomId) {
        return messageService.describeAllMessages(Long.parseLong(chatRoomId));
    }

    @PutMapping("/messages/{chat_room_id}")
    public List<MessageDto> addMyChatRoomMessage(@PathVariable("chat_room_id") String chatRoomId,
            @RequestBody NewMessageRequestDto requestDto) {
        return messageService.sendMessage(chatRoomId, requestDto);
    }

    /*
     * WEB SOCKET
     */

    @SubscribeMapping("/joined.users")
    public List<String> describeJoinedUsers(SimpMessageHeaderAccessor headerAccessor) {
        String chatRoomId = headerAccessor.getSessionAttributes().get("chatRoomId").toString();
        ChatRoom chatRoom = chatRoomService.findByChatRoomId(Long.parseLong(chatRoomId));
        return chatRoom.describeJoinedUser().stream().map(UserProfile::getId).toList();
    }

    @SubscribeMapping("/old.messages")
    public List<MessageDto> describeAllMessages(@PathVariable("chat_room_id") String chatRoomId) {
        return messageService.describeAllMessages(Long.parseLong(chatRoomId));
    }

    @MessageMapping("/send.message")
    public void sendMessage(@Payload InstantMessage instantMessage, Principal principal, SimpMessageHeaderAccessor headerAccessor) {
        String chatRoomId = Objects.requireNonNull(headerAccessor.getSessionAttributes()).get("chatRoomId").toString();
        String providerId = principal.getName();
        messageService.sendMessage(instantMessage, chatRoomId, providerId);
    }
}
