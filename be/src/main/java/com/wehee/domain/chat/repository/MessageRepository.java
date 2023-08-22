package com.wehee.domain.chat.repository;

import com.wehee.domain.chat.entity.InstantMessage;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MessageRepository extends JpaRepository<InstantMessage, Long> {

    @Query("select m from InstantMessage m where m.chatRoom.id = :id order by m.timestamp asc")
    List<InstantMessage> findByChatRoomId(@Param("id") Long id);
}
