package com.wehee.domain.chat.exception;

public class ChatRoomExceedLimitException extends RuntimeException{

    public ChatRoomExceedLimitException(int limit) {
        super("채팅방이 이미 꽉 찼습니다! (" + limit +"명)");
    }
}
