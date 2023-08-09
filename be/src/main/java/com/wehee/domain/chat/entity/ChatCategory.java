package com.wehee.domain.chat.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ChatCategory {
    CRUSH("CRUSH", "짝사랑"),
    SOME("SOME", "썸"),
    ROMANTIC_RELATIONSHIP("ROMANTIC_RELATIONSHIP", "연애"),
    BREAK_UP("BREAK_UP", "이별"),
    REUNION("REUNION", "재회"),
    NONE("NONE", "없음");

    private final String code;
    private final String displayName;
}
