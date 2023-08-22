package com.wehee.domain.voice.repository;

import com.wehee.domain.voice.entity.VoiceRoom;
import com.wehee.domain.voice.entity.VoiceUserTag;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VoiceRoomRepository extends JpaRepository<VoiceRoom, Long> {

    @Query("select c from VoiceRoom c where c.id = :id")
    Optional<VoiceRoom> findById(@Param("id") Long id);

    @Query("select c from VoiceRoom c where (c.title LIKE %:keyword%) order by c.created desc")
    List<VoiceRoom> findByKeyword(@Param("keyword") String keyword);
}
