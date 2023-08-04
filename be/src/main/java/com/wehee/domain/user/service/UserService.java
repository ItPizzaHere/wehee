package com.wehee.domain.user.service;

import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUser(int userId) {
        return userRepository.findByUserId(userId);
    }
}
