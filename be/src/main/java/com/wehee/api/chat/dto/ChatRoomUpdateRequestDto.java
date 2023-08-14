package com.wehee.api.chat.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

@Getter
public class ChatRoomUpdateRequestDto {

    @Length(min = 1, max = 30)
    private String title;

    @NotNull
    private String category;

    @NotNull @Min(0) @Max(10)
    private int limit;
}
