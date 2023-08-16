package com.wehee.api.voice.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

@Getter
public class VoiceRoomUpdateRequestDto {

    @Length(min = 1, max = 30)
    private String title;

    @Length(min = 1, max = 50)
    private String description;

    @NotNull @Min(0) @Max(100)
    private int limit;
}
