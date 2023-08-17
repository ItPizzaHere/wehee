package com.wehee.domain.user.entity;

import java.util.Arrays;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Gender {
    FEMALE("여"),
    MALE("남"),
    NONE("없음"),
    ALL("모두");

    @Getter
    private final String code;

    public static Gender fromCode(String code) {
        return Arrays.stream(Gender.values())
            .filter(g -> g.code.equals(code))
            .findFirst().get();
    }
}
