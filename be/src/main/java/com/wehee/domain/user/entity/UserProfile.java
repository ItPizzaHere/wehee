package com.wehee.domain.user.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserProfile {

    private String id;
    private String nickname;
    private String profile;

    public static UserProfile from(User user) {
        if (user == null) {
            return new UserProfile("", "WeHee", "SystemUser");
        }

        String name = String.format("%s #%s", user.getNickname(), user.getMbti());
        return new UserProfile(user.getProviderId(), name, user.getProfile());
    }
}
