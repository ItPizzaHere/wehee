package com.wehee.domain.auth.token;

import io.jsonwebtoken.security.Keys;
import java.security.Key;

public class AuthTokenProvider {

    private final Key key;

    public AuthTokenProvider(String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

}
