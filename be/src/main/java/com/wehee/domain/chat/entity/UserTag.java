package com.wehee.domain.chat.entity;

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
public class UserTag {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    @Enumerated(EnumType.STRING)
    private RoleStatus roleStatus;

    @Builder
    public UserTag(ChatRoom chatRoom, User user, RoleStatus roleStatus) {
        this.chatRoom = chatRoom;
        this.user = user;
        this.roleStatus = roleStatus;
    }

    public static UserTag create(ChatRoom chatRoom, User user, RoleStatus roleStatus) {
        return UserTag.builder()
                .chatRoom(chatRoom)
                .user(user)
                .roleStatus(roleStatus)
                .build();
    }

    public UserTag updateRoleStatus(RoleStatus roleStatus) {
        this.roleStatus = roleStatus;
        return this;
    }
}
