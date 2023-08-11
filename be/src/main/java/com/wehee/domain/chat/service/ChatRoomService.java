package com.wehee.domain.chat.service;

import com.wehee.domain.chat.entity.ChatRoom;
import org.springframework.stereotype.Service;

@Service
public interface ChatRoomService {
    ChatRoom save(ChatRoom chatRoom);
}
