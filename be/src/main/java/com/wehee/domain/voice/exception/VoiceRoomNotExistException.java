package com.wehee.domain.voice.exception;

public class VoiceRoomNotExistException extends RuntimeException {

    public VoiceRoomNotExistException() {
        super("해당 채팅방이 존재하지 않습니다.");
    }
}
