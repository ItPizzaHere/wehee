package com.wehee.domain.auth.service;

import com.wehee.domain.auth.entity.Provider;
import com.wehee.domain.auth.entity.Role;
import com.wehee.domain.auth.entity.UserPrincipal;
import com.wehee.domain.auth.info.OAuth2UserInfo;
import com.wehee.domain.auth.info.OAuth2UserInfoFactory;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.repository.UserRepository;
import com.wehee.utils.StringUtil;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;
    private final int RANDOM_USER_NAME_LENGTH = 8;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);

        try {
            return this.createOrValidateUser(userRequest, user);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User createOrValidateUser(OAuth2UserRequest userRequest, OAuth2User user) {
        Provider provider = Provider.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());

        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(provider, user.getAttributes());
        User savedUser = userRepository.findByProviderId(userInfo.getProviderId());

        if (savedUser != null) {
            validateUser(savedUser, provider);
        } else {
            savedUser = createUser(userInfo, provider);
        }

        return UserPrincipal.create(savedUser, user.getAttributes());
    }

    private void validateUser(User user, Provider provider) {
        if (!user.isEqualProvider(provider)) {
            throw new OAuth2AuthenticationException(
                "Looks like you're signed up with " + provider +
                    " account. Please use your " + user.getProvider() + " account to login."
            );
        }

        if (user.isWithdrawal()) {
            throw new OAuth2AuthenticationException("이미 탈퇴한 회원입니다.");
        }
    }

    private User createUser(OAuth2UserInfo userInfo, Provider provider) {
        String nickname = StringUtil.generateRandomString(RANDOM_USER_NAME_LENGTH);
        while (userRepository.findByNickname(nickname) != null) {
            nickname = StringUtil.generateRandomString(RANDOM_USER_NAME_LENGTH);
        }

        LocalDate now = LocalDate.now();
        User user = User.create(
                userInfo.getProviderId(),
                provider,
                userInfo.getBirth(),
                userInfo.getGender(),
                userInfo.getEmail(),
                userInfo.getImageUrl(),
                nickname,
                Role.USER,
                now
        );

        return userRepository.save(user);
    }
}
