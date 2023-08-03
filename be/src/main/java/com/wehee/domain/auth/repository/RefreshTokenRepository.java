package com.wehee.domain.auth.repository;

import com.wehee.domain.auth.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    RefreshToken findByUserId(String userId);
    RefreshToken findByUserIdAndRefreshToken(String userId, String refreshToken);
}
