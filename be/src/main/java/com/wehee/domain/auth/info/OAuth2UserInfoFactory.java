package com.wehee.domain.auth.info;

import com.wehee.domain.auth.entity.Provider;
import com.wehee.domain.auth.info.impl.GoogleOAuth2UserInfo;
import com.wehee.domain.auth.info.impl.KakaoOAuth2UserInfo;
import com.wehee.domain.auth.info.impl.NaverOAuth2UserInfo;
import java.util.Map;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(Provider provider, Map<String, Object> attributes) {
        switch (provider) {
            case GOOGLE: return new GoogleOAuth2UserInfo(attributes);
            case NAVER: return new NaverOAuth2UserInfo(attributes);
            case KAKAO: return new KakaoOAuth2UserInfo(attributes);
            default: throw new IllegalArgumentException("Invalid Provider");
        }
    }

}
