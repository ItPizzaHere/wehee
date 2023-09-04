package com.wehee.api.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserUpdateResponseDto {
    private boolean mbti;
    private boolean gender;
    private boolean birth;

    public static UserUpdateResponseDto create(boolean mbti, boolean gender, boolean birth) {
        return new UserUpdateResponseDto(mbti, gender, birth);
    }
}
