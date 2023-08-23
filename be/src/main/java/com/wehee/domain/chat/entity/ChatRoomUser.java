package com.wehee.domain.chat.entity;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
public class ChatRoomUser implements Comparable<ChatRoomUser>{

    private static final int PRIME = 31;

    private String username;
    private LocalDateTime joinedAt = LocalDateTime.now();

    @Override
    public int compareTo(ChatRoomUser chatRoomUser) {
        return username.compareTo(chatRoomUser.getUsername());
    }

    @Override
    public int hashCode() {
        return PRIME + ((username == null) ? 0 : username.hashCode());
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj == null) {
            return false;
        }

        if (getClass() != obj.getClass()) {
            return false;
        }

        ChatRoomUser other = (ChatRoomUser) obj;
        if (username == null && other.getUsername() != null) {
            return false;
        } else if (username != null && !username.equals(other.getUsername())) {
            return false;
        }

        return true;
    }
}
