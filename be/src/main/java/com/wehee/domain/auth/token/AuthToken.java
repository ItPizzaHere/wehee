package com.wehee.domain.auth.token;

import java.security.Key;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AuthToken {

    @Getter
    private final String token;
    private final Key key;

}
