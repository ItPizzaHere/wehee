package com.wehee.domain.user.repository;

import com.wehee.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByProviderId(String providerId);
    User findByNickname(String nickname);
}
