package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.user.entity.UserProfile;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MyChatRoomResponseDto {

    private Long id;
    private String title;
    private String category;
    private String announcement;
    private List<UserProfile> users;
    private int joined;
    private int limit;

    public static MyChatRoomResponseDto from(ChatRoom chatRoom) {
        return new MyChatRoomResponseDto(
                chatRoom.getId(),
                chatRoom.getTitle(),
                chatRoom.getCategory().getDisplayName(),
                chatRoom.getAnnouncement(),
                chatRoom.describeJoinedUser(),
                chatRoom.getJoinedUserNumber(),
                chatRoom.getLimit()
        );
    }
}
