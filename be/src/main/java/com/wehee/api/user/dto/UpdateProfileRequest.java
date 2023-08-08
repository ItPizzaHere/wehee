package com.wehee.api.user.dto;

import lombok.Getter;

@Getter
public class UpdateProfileRequest {
    private String profile;

    public void setProfile(String profile) {
        this.profile = profile;
    }
}
