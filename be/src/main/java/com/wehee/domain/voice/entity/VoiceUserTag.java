package com.wehee.domain.voice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wehee.domain.user.entity.User;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VoiceUserTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "voice_room_id")
    private VoiceRoom voiceRoom;

    @Enumerated(EnumType.STRING)
    private VoiceRoleStatus voiceRoleStatus;

    @Builder
    public VoiceUserTag(VoiceRoom voiceRoom, User user, VoiceRoleStatus voiceRoleStatus) {
        this.voiceRoom = voiceRoom;
        this.user = user;
        this.voiceRoleStatus = voiceRoleStatus;
    }

    public static VoiceUserTag create(VoiceRoom voiceRoom, User user, VoiceRoleStatus voiceRoleStatus) {
        return VoiceUserTag.builder()
            .voiceRoom(voiceRoom)
            .user(user)
            .voiceRoleStatus(voiceRoleStatus)
            .build();
    }

    public VoiceUserTag updateRoleStatus(VoiceRoleStatus voiceRoleStatus) {
        this.voiceRoleStatus = voiceRoleStatus;
        return this;
    }
}
