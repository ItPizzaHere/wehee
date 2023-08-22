package com.wehee.config.network;

import com.wehee.domain.auth.exception.InvalidTokenException;
import com.wehee.domain.auth.token.AuthTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class WebSocketInterceptor implements ChannelInterceptor {

    private final AuthTokenProvider tokenProvider;

    @SneakyThrows
    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

        if (accessor.getCommand() == StompCommand.CONNECT) {
            if (!tokenProvider.isValidate(accessor.getFirstNativeHeader("Authorization"))) {
                throw new InvalidTokenException();
            }
        }

        return message;
    }
}
