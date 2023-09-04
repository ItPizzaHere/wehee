package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.user.entity.UserProfile;

import java.text.SimpleDateFormat;
import java.util.Date;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MessageDto {

    private UserProfile userProfile;
    private String message;
    private String timestamp;

    public static MessageDto from(InstantMessage message) {
        SimpleDateFormat format = new SimpleDateFormat("HH:mm");

        return new MessageDto(
            UserProfile.from(message.getUser()),
            message.getMessage(),
            format.format(message.getTimestamp())
        );
    }
}
