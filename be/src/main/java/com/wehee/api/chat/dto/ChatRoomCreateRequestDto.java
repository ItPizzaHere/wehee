package com.wehee.api.chat.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

@Getter
public class ChatRoomCreateRequestDto {

    @Length(min = 1, max = 30)
    private String title;

    @NotNull
    private String category;

    @NotNull @Min(0) @Max(10)
    private int limit;

    @NotNull @Size(min = 1, max = 3)
    private List<String> mbtis;

    @NotNull
    private String gender;

    @NotNull @Min(0) @Max(100)
    private int minAge;

    @NotNull @Min(0) @Max(100)
    private int maxAge;
}
