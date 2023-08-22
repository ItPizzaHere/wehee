package com.wehee.domain.auth.entity;

import com.wehee.domain.auth.repository.RefreshTokenRepository;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Table(name = "REFRESH_TOKEN")
public class RefreshToken {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String providerId;
    private String refreshToken;

    @Builder
    public RefreshToken(String providerId, String refreshToken) {
        this.providerId = providerId;
        this.refreshToken = refreshToken;
    }

    public static RefreshToken createRefreshToken(String providerId, String refreshToken) {
        return RefreshToken.builder()
            .providerId(providerId)
            .refreshToken(refreshToken)
            .build();
    }

    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
