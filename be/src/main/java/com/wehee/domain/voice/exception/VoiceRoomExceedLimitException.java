package com.wehee.domain.voice.exception;

public class VoiceRoomExceedLimitException extends RuntimeException{

    public VoiceRoomExceedLimitException(int limit) {
        super("채팅방이 이미 꽉 찼습니다! (" + limit +"명)");
    }
}
