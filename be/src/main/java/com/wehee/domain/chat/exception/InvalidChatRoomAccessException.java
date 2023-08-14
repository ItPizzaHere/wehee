package com.wehee.domain.chat.exception;

public class InvalidChatRoomAccessException extends RuntimeException {

    public InvalidChatRoomAccessException() {
        super("채팅 생성자만 접근할 수 있습니다!");
    }
}
