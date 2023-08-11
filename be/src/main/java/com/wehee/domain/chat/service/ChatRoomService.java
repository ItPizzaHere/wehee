package com.wehee.domain.chat.service;

import com.wehee.api.chat.dto.ChatRoomResponseDto;
import com.wehee.api.chat.dto.ChatRoomSearchCondition;
import com.wehee.domain.chat.entity.ChatRoom;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface ChatRoomService {
    ChatRoom save(ChatRoom chatRoom);
    List<ChatRoomResponseDto> findByCategoriesAndKeyword(ChatRoomSearchCondition condition);
}
