package com.wehee.domain.chat.exception;

public class ChatRoomParticipantLimitException extends RuntimeException {

    public ChatRoomParticipantLimitException(int limit) {
        super("채팅방은 " + limit + "개를 초과해 입장하실 수 없습니다.");
    }
}
