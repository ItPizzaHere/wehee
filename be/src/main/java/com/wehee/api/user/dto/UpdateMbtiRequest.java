package com.wehee.api.user.dto;

import com.wehee.utils.MBTI;
import lombok.Getter;
import java.time.LocalDate;

@Getter
public class UpdateMbtiRequest {
    private MBTI mbti;
    private LocalDate lastMbtiModified;

    public void setMbti(MBTI mbti) {
        this.mbti = mbti;
    }
    public void setLastMbtiModified(LocalDate lastMbtiModified) {
        this.lastMbtiModified = lastMbtiModified;
    }
}
