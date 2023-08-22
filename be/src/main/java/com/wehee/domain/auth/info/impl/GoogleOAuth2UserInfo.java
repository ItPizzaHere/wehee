package com.wehee.domain.auth.info.impl;

import com.wehee.domain.auth.info.OAuth2UserInfo;
import com.wehee.domain.user.entity.Gender;
import java.time.LocalDate;
import java.util.Map;

public class GoogleOAuth2UserInfo extends OAuth2UserInfo {

    public GoogleOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getProviderId() {
        return (String) attributes.get("sub");
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("picture");
    }

    @Override
    public String getBirth() {
        String birth = (String) attributes.get("birthday");

        if (birth == null) {
            return "0";
        }

        LocalDate currentDate = LocalDate.parse(birth);
        return String.valueOf(currentDate.getYear());
    }

    @Override
    public Gender getGender() {
        String gender = (String) attributes.get("gender");

        if (gender == null) {
            return Gender.NONE;
        }

        return gender.equals("female") ? Gender.FEMALE : Gender.MALE;
    }
}
