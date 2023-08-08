package com.wehee.api.user.dto;

import com.wehee.domain.user.entity.Gender;
import lombok.Getter;

@Getter
public class UpdateGenderRequest {
    private Gender gender;
    private Boolean genderChanged;

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setGenderChanged(Boolean genderChanged) {
        this.genderChanged = genderChanged;
    }
}
