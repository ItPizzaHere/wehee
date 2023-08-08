package com.wehee.api.user.dto;

import lombok.Getter;

@Getter
public class UpdateNicknameRequest {
    private String nickname;

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
