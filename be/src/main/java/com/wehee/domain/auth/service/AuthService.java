package com.wehee.domain.auth.service;

import com.wehee.common.ApiResponse;
import com.wehee.config.properties.AppProperties;
import com.wehee.domain.auth.entity.RefreshToken;
import com.wehee.domain.auth.exception.InvalidTokenException;
import com.wehee.domain.auth.exception.NotExpiredTokenException;
import com.wehee.domain.auth.repository.RefreshTokenRepository;
import com.wehee.domain.auth.token.AuthToken;
import com.wehee.domain.auth.token.AuthTokenProvider;
import com.wehee.domain.auth.token.TokenValidator;
import com.wehee.utils.CookieUtil;
import com.wehee.utils.HeaderUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AppProperties appProperties;
    private final AuthTokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    private final static long DAY_MILLI_SEC = 86400000;
    private final static String REFRESH_TOKEN = "refresh_token";

    public ApiResponse reissueRefreshToken(HttpServletRequest request, HttpServletResponse response) {
        String accessToken = HeaderUtil.getAccessToken(request);

        TokenValidator v1 = validateAccessTokenBeforeReissue(accessToken);
        if (v1 != null) {
            return v1.getResult();
        }

        String refreshToken = CookieUtil.get(request, REFRESH_TOKEN)
            .map(Cookie::getValue)
            .orElse(null);
        String providerId = tokenProvider.getExpiredTokenProviderId(accessToken);

        TokenValidator v2 = validateRefreshToken(refreshToken);
        if (v2 != null) {
            return v2.getResult();
        }

        RefreshToken userRefreshToken = refreshTokenRepository.findByProviderIdAndRefreshToken(
            providerId, refreshToken);

        if (userRefreshToken == null) {
            return ApiResponse.invalidRefreshToken();
        }

        AuthToken newAccessToken = tokenProvider.createAccessToken(
            providerId, tokenProvider.getExpiredTokenRole(accessToken), appProperties.getAuth().getTokenExpiry());

        renewRefreshToken(request, response, refreshToken, userRefreshToken);
        return ApiResponse.success("token", newAccessToken.getToken());
    }

    private TokenValidator validateAccessTokenBeforeReissue(String token) {
        try {
            tokenProvider.validateAccessTokenBeforeReissue(token);
        } catch (InvalidTokenException | NotExpiredTokenException e) {
            return new TokenValidator(e, false);
        }
        return null;
    }

    private TokenValidator validateRefreshToken(String token) {
        try {
            tokenProvider.validateRefreshToken(token);
        } catch (InvalidTokenException e) {
            return new TokenValidator(e, true);
        }
        return null;
    }

    private void renewRefreshToken(HttpServletRequest request, HttpServletResponse response,
        String refreshToken, RefreshToken savedRefreshToken) {

        long validTime = tokenProvider.getExpiration(refreshToken).getTime() - new Date().getTime();

        if (validTime < DAY_MILLI_SEC * 3) {
            return;
        }

        long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();
        int maxAge = (int) (refreshTokenExpiry / 1000);

        AuthToken newRefreshToken = tokenProvider.createRefreshToken(
            appProperties.getAuth().getTokenSecret(), refreshTokenExpiry);
        savedRefreshToken.updateRefreshToken(newRefreshToken.getToken());
        CookieUtil.renew(request, response, REFRESH_TOKEN, newRefreshToken.getToken(), maxAge);
    }
}
