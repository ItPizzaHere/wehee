package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.user.entity.UserProfile;
import com.wehee.domain.user.entity.Gender;
import com.wehee.utils.MBTI;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ChatRoomInfoResponseDto {

    private Long id;

    private String title;
    private List<MBTI> targetMbtis;
    private Gender targetGender;

    private int joined;
    private int limit;
    private List<UserProfile> activateUsers;

    private int minAge;
    private int maxAge;

    public static ChatRoomInfoResponseDto from(ChatRoom chatRoom) {
        return new ChatRoomInfoResponseDto(
            chatRoom.getId(),
            chatRoom.getTitle(),
            chatRoom.getTargetMbtis(),
            chatRoom.getTargetGender(),
            chatRoom.getJoinedUserNumber(),
            chatRoom.getLimit(),
            chatRoom.describeJoinedUser(),
            chatRoom.getMinAge(),
            chatRoom.getMaxAge()
        );
    }
}
