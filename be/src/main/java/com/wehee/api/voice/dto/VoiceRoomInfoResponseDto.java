package com.wehee.api.voice.dto;

import com.wehee.domain.user.entity.UserProfile;
import com.wehee.domain.voice.entity.VoiceRoom;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class VoiceRoomInfoResponseDto {

    private Long id;
    private String title;
    private  String description;
    private int limit;
    private List<UserProfile> activateUsers;
    private int joined;

    public static VoiceRoomInfoResponseDto from(VoiceRoom voiceRoom) {
        return new VoiceRoomInfoResponseDto(
            voiceRoom.getId(),
            voiceRoom.getTitle(),
            voiceRoom.getDescription(),
            voiceRoom.getLimit(),
            voiceRoom.describeJoinedUser(),
            voiceRoom.getJoinedUserNumber()
        );
    }
}
