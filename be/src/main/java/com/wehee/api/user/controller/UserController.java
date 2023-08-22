package com.wehee.api.user.controller;

import com.wehee.api.user.dto.UserInfoRequestDto;
import com.wehee.api.user.dto.UserResponseDto;
import com.wehee.api.user.dto.UserUpdateResponseDto;
import com.wehee.common.ApiResponse;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ApiResponse<UserResponseDto> describeAuthenticatedUser() {
        User user = userService.getAuthenticatedUser();
        return ApiResponse.success("user", UserResponseDto.from(user));
    }

    @PutMapping
    public ApiResponse<UserResponseDto> registerUserInformation(@RequestBody UserInfoRequestDto requestDto) {
        User user = userService.registerUserInformation(requestDto);
        return ApiResponse.success("user", UserResponseDto.from(user));
    }

    @GetMapping("/{nickname}")
    public ApiResponse<Boolean> isRegisteredNickname(@PathVariable String nickname) {
        boolean result = userService.isRegisteredNickname(nickname);
        return ApiResponse.success("result", result);
    }

    @GetMapping("/mypage")
    public ApiResponse<UserUpdateResponseDto> checkUpdateAvailability() {
        UserUpdateResponseDto response = userService.checkUpdateAvailability();
        return ApiResponse.success("result", response);
    }

    @PutMapping("/update-nickname")
    public ApiResponse<Boolean> updateNickname(@RequestBody String nickname) {
        userService.updateNickname(nickname);
        return ApiResponse.success("result", true);
    }

    @PutMapping("/mbti")
    public ApiResponse<Boolean> updateMbti(@RequestBody String mbti) {
        userService.updateMbti(mbti);
        return ApiResponse.success("result", true);
    }

    @PutMapping("/birth")
    public ApiResponse<Boolean> updateBirth(@RequestBody String birth) {
        userService.updateBirth(birth);
        return ApiResponse.success("result", true);
    }

    @PutMapping("/gender")
    public ApiResponse<Boolean> updateGender(@RequestBody String gender) {
        userService.updateGender(gender);
        return ApiResponse.success("result", true);
    }

    @PostMapping("/withdraw")
    public ApiResponse<Boolean> withdrawUser() {
        userService.withdrawUser();
        return ApiResponse.success("result", true);
    }
}