package com.wehee.domain.voice.exception;

public class VoiceRoomParticipantLimitException extends RuntimeException {

    public VoiceRoomParticipantLimitException(int limit) {
        super("채팅방은 " + limit + "개를 초과해 입장하실 수 없습니다.");
    }
}
