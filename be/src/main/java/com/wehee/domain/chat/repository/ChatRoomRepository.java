package com.wehee.domain.chat.repository;

import com.wehee.domain.chat.entity.ChatRoom;
import org.springframework.data.repository.CrudRepository;

public interface ChatRoomRepository extends CrudRepository<ChatRoom, String> {

}
