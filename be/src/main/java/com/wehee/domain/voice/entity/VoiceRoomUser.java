package com.wehee.domain.voice.entity;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
public class VoiceRoomUser implements Comparable<VoiceRoomUser> {

    private static final int PRIME = 31;

    private String username;
    private LocalDateTime joinedAt = LocalDateTime.now();

    @Override
    public int compareTo(VoiceRoomUser voiceRoomUser) {
        return username.compareTo(voiceRoomUser.getUsername());
    }

    @Override
    public int hashCode() {
        if (username == null) {
            return PRIME;
        } else {
            return PRIME + username.hashCode();
        }
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

        VoiceRoomUser other = (VoiceRoomUser) obj;
        if (username == null && other.getUsername() != null) {
            return false;
        } else if (username != null && !username.equals(other.getUsername())) {
            return false;
        }

        return true;
    }
}
