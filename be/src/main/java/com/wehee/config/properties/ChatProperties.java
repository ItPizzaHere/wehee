package com.wehee.config.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Component
@ConfigurationProperties(prefix = "chat")
public class ChatProperties {

    @Value("${chat.chatRoomJoinLimit}")
    private int chatRoomJoinLimit;
}
