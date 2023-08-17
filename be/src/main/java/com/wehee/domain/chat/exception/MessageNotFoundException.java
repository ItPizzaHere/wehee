package com.wehee.domain.chat.exception;

public class MessageNotFoundException extends RuntimeException {

    public MessageNotFoundException() {
        super("해당 메시지가 존재하지 않습니다!");
    }
}
