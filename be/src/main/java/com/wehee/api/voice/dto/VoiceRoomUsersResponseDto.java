package com.wehee.api.voice.dto;

import com.wehee.domain.user.entity.User;
import com.wehee.domain.voice.entity.VoiceRoleStatus;
import com.wehee.domain.voice.entity.VoiceRoom;
import com.wehee.domain.voice.entity.VoiceUserTag;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class VoiceRoomUsersResponseDto {

    private Long id;
    private VoiceRoom voiceRoom;
    private User user;
    private VoiceRoleStatus voiceRoleStatus;

    public static VoiceRoomUsersResponseDto from(VoiceUserTag voiceUserTag) {
        return new VoiceRoomUsersResponseDto(
            voiceUserTag.getId(),
            voiceUserTag.getVoiceRoom(),
            voiceUserTag.getUser(),
            voiceUserTag.getVoiceRoleStatus()
        );
    }

}
