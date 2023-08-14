package com.wehee.domain.chat.exception;

public class ChatRoomLimitNotReducibleException extends RuntimeException {

    public ChatRoomLimitNotReducibleException() {
        super("채팅방 제한 인원은 현재 참여 중인 인원보다 적을 수 없습니다.");
    }
}
