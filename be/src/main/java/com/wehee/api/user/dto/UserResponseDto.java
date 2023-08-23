package com.wehee.api.user.dto;

import com.wehee.domain.user.entity.Gender;
import com.wehee.domain.user.entity.User;
import com.wehee.utils.MBTI;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserResponseDto {

    private int userId;
    private String providerId;
    private String nickname;
    private String profile;
    private MBTI mbti;
    private String birth;
    private Gender gender;

    public static UserResponseDto from(User user) {
        return new UserResponseDto(
            user.getUserId(),
            user.getProviderId(),
            user.getNickname(),
            user.getProfile(),
            user.getMbti(),
            user.getBirth(),
            user.getGender()
        );
    }
}
