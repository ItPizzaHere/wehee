package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.ChatCategory;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.chat.entity.UserTag;
import com.wehee.domain.chat.utils.TimeUtil;
import java.util.Date;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MyChatRoomInfoResponseDto {

    private Long id;
    private String category;
    private String title;
    private String lastMessage;
    private String lastMessageSent;
    private int joined;
    private int limit;

    public static MyChatRoomInfoResponseDto from (UserTag userTag, InstantMessage message, Date now) {
        ChatRoom chatRoom = userTag.getChatRoom();

        return new MyChatRoomInfoResponseDto(
                chatRoom.getId(),
                chatRoom.getCategory().getDisplayName(),
                chatRoom.getTitle(),
                message.getMessage(),
                TimeUtil.convert(now, message.getTimestamp()),
                chatRoom.getJoinedUserNumber(),
                chatRoom.getLimit()
        );
    }
}
