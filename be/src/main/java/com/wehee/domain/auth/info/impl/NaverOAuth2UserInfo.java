package com.wehee.domain.auth.info.impl;

import com.wehee.domain.auth.info.OAuth2UserInfo;
import com.wehee.domain.user.entity.Gender;
import java.util.Map;

public class NaverOAuth2UserInfo extends OAuth2UserInfo {

    private Map<String, Object> response;

    public NaverOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
        this.response = (Map<String, Object>) attributes.get("response");
    }

    @Override
    public String getProviderId() {
        if (response == null) {
            return null;
        }

        return (String) response.get("id");
    }

    @Override
    public String getEmail() {
        if (response == null) {
            return null;
        }

        return (String) response.get("email");
    }

    @Override
    public String getImageUrl() {
        if (response == null) {
            return null;
        }

        return (String) response.get("profile_image");
    }

    @Override
    public String getBirth() {
        if (response == null) {
            return "0";
        }

        if (!response.containsKey("birthyear")) {
            return "0";
        }

        return (String) response.get("birthyear");
    }

    @Override
    public Gender getGender() {
        if (response == null) {
            return Gender.NONE;
        }

        if (!response.containsKey("gender")) {
            return Gender.NONE;
        }

        String gender = (String) response.get("gender");
        return gender.equals("F") ? Gender.FEMALE : Gender.MALE;
    }
}
