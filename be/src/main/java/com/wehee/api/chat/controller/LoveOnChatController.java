package com.wehee.api.chat.controller;

import com.wehee.api.chat.dto.ChatRoomResponseDto;
import com.wehee.api.chat.dto.ChatRoomSearchCondition;
import com.wehee.domain.chat.service.ChatRoomService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/loveonchat")
@RequiredArgsConstructor
public class LoveOnChatController {

    private final ChatRoomService chatRoomService;

    @GetMapping
    public List<ChatRoomResponseDto> searchByCondition(@ModelAttribute ChatRoomSearchCondition condition) {
        return chatRoomService.findByCategoriesAndKeyword(condition);
    }
}
