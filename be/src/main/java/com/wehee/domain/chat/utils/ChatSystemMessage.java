package com.wehee.domain.chat.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ChatSystemMessage {

    NEW_CHAT("새로운 채팅이 시작되었습니다."),
    WILL_DISAPPEARED("24시간 뒤에 방이 사라집니다."),
    OUTCASTED("관리자가 회원님을 내보냈습니다."),
    CLOSED("관리자에 의해 대회가 종료되었습니다.");

    private final String message;
}
