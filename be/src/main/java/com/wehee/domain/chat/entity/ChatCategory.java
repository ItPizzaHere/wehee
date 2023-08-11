package com.wehee.domain.chat.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ChatCategory {
    CRUSH("crush", "짝사랑"),
    SOME("some", "썸"),
    ROMANTIC_RELATIONSHIP("rel", "연애"),
    BREAK_UP("break", "이별"),
    REUNION("reunion", "재회"),
    NONE("none", "없음");

    @Getter
    private final String code;
    private final String displayName;
}
