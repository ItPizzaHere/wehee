package com.wehee.api.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserInfoRequestDto {
    private String providerId;
    private String nickname;
    private String mbti;
    private String gender;
    private String birth;
}
