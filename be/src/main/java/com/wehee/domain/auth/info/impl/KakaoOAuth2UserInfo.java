package com.wehee.domain.auth.info.impl;

import com.wehee.domain.auth.info.OAuth2UserInfo;
import com.wehee.domain.user.entity.Gender;
import java.util.Map;

public class KakaoOAuth2UserInfo extends OAuth2UserInfo {

    private Map<String, Object> kakaoAccount;
    private Map<String, Object> profile;


    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
        this.kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        this.profile = (Map<String, Object>) this.kakaoAccount.get("profile");
    }

    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getEmail() {
        return (String) kakaoAccount.get("email");
    }

    @Override
    public String getImageUrl() {
        if (profile == null) {
            return null;
        }

        return (String) profile.get("profile_image_url");
    }

    @Override
    public String getBirth() {
        if (kakaoAccount == null) {
            return "0";
        }

        if (!kakaoAccount.containsKey("birthyear")) {
            return "0";
        }

        return (String) kakaoAccount.get("birthyear");
    }

    @Override
    public Gender getGender() {
        if (kakaoAccount == null) {
            return Gender.NONE;
        }

        if (!kakaoAccount.containsKey("gender")) {
            return Gender.NONE;
        }

        String gender = (String) kakaoAccount.get("gender");
        return gender.equals("female") ? Gender.FEMALE : Gender.MALE;
    }
}
