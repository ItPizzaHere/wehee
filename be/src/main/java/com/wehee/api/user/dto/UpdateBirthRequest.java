package com.wehee.api.user.dto;

import lombok.Getter;

@Getter
public class UpdateBirthRequest {
    private Integer birth;
    private Boolean birthChanged;

    public void setBirth(Integer birth) {
        this.birth = birth;
    }

    public void setBirthChanged(Boolean birthChanged) {
        this.birthChanged = birthChanged;
    }
}
