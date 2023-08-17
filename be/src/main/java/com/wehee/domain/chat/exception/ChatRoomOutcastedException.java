package com.wehee.domain.chat.exception;

public class ChatRoomOutcastedException extends RuntimeException {

    public ChatRoomOutcastedException() {
        super("관리자에 의해 채팅방 입장이 거부되었습니다.");
    }
}
