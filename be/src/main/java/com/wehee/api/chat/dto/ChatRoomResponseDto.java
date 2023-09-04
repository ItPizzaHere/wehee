package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.ChatCategory;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.user.entity.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ChatRoomResponseDto {

    private Long id;
    private String profile;
    private String nickname;
    private String title;
    private String category;
    private int joined;
    private int limit;

    public static ChatRoomResponseDto from(ChatRoom chatRoom) {
        User owner = chatRoom.findOwner();

        return new ChatRoomResponseDto(
            chatRoom.getId(),
            owner.getProfile(),
            String.format("%s #%s", owner.getNickname(), owner.getMbti()),
            chatRoom.getTitle(),
            chatRoom.getCategory().getDisplayName(),
            chatRoom.getJoinedUserNumber(),
            chatRoom.getLimit()
        );
    }
}
