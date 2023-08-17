package com.wehee.api.chat.dto;

import lombok.Getter;

@Getter
public class NewMessageRequestDto {

    private String chatRoomId;
    private String message;
}
