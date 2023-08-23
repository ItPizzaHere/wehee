package com.wehee.domain.voice.repository;

import com.wehee.domain.voice.entity.VoiceRoom;
import com.wehee.domain.voice.entity.VoiceUserTag;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VoiceUserTagRepository extends JpaRepository<VoiceUserTag, Long> {

//    @Query("select c from VoiceUserTag c where c.voiceRoomId = :voice_room_id")
//    Optional<VoiceUserTag> findUsersById(@Param("voice_room_id") Long voice_room_id);

    @Query("select c from VoiceUserTag c where c.voiceRoom.id = :voice_room_id")
    Optional<VoiceUserTag> findUsersById(@Param("voice_room_id") Long voice_room_id);


}
