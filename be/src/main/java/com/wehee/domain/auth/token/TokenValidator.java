package com.wehee.domain.auth.token;

import com.wehee.common.ApiResponse;
import com.wehee.domain.auth.exception.InvalidTokenException;
import com.wehee.domain.auth.exception.NotExpiredTokenException;
import lombok.Getter;

@Getter
public class TokenValidator<T> {
    private ApiResponse result;
    private Exception exception;

    public TokenValidator(Exception e, boolean isRefreshToken) {
        this.exception = e;

        if (e.getClass().equals(InvalidTokenException.class)) {
            this.result = isRefreshToken ? ApiResponse.invalidRefreshToken() : ApiResponse.invalidAccessToken();
        } else if (e.getClass().equals(NotExpiredTokenException.class)) {
            this.result = ApiResponse.notExpiredTokenYet();
        } else {
            this.result = null;
        }
    }
}
