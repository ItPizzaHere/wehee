package com.wehee.domain.chat.repository;

import com.wehee.domain.chat.entity.InstantMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<InstantMessage, Long> {

}
