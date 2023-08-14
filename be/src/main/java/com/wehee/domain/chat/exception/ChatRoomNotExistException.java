package com.wehee.domain.chat.exception;

public class ChatRoomNotExistException extends RuntimeException {

    public ChatRoomNotExistException() {
        super("해당 채팅방이 존재하지 않습니다.");
    }
}
