package com.wehee.domain.chat.websocket;

import com.wehee.domain.chat.service.ChatRoomService;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@RequiredArgsConstructor
@Component
public class WebSocketEvents {

    private final ChatRoomService chatRoomService;

    @EventListener
    private void handleSessionConnected(SessionConnectEvent event) {
        SimpMessageHeaderAccessor headers = SimpMessageHeaderAccessor.wrap(event.getMessage());
        String chatRoomId = Objects.requireNonNull(headers.getNativeHeader("chatRoomId")).get(0);
        headers.getSessionAttributes().put("chatRoomId", chatRoomId);

        chatRoomService.joinOrActivateChatRoom(Long.parseLong(chatRoomId));
    }

    @EventListener
    private void handleSessionDisconnect(SessionDisconnectEvent event) {

    }
}
