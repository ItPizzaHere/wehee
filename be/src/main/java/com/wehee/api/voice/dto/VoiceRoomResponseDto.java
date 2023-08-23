package com.wehee.api.voice.dto;

import com.wehee.domain.chat.entity.ChatCategory;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.voice.entity.VoiceRoom;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class VoiceRoomResponseDto {

    private Long id;
    private String profile;
    private String nickname;
    private String title;
    private String description;
    private int joined;
    private int limit;

    public static VoiceRoomResponseDto from(VoiceRoom voiceRoom) {
        User owner = voiceRoom.findOwner();

        return new VoiceRoomResponseDto(
            voiceRoom.getId(),
            owner.getProfile(),
            String.format("%s #%s", owner.getNickname(), owner.getMbti()),
            voiceRoom.getTitle(),
            voiceRoom.getDescription(),
            voiceRoom.getJoinedUserNumber(),
            voiceRoom.getLimit()
        );
    }
}
