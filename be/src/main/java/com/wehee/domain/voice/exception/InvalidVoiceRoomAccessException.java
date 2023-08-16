package com.wehee.domain.voice.exception;

public class InvalidVoiceRoomAccessException extends RuntimeException {

    public InvalidVoiceRoomAccessException() {
        super("보이스룸 생성자만 접근할 수 있습니다!");
    }
}
