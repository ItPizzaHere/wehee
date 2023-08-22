package com.wehee.domain.chat.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wehee.domain.user.entity.User;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "message")
public class InstantMessage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private String message;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    @Builder
    public InstantMessage(ChatRoom chatRoom, String message) {
        this.chatRoom = chatRoom;
        this.user = null;
        this.message = message;
        this.timestamp = new Date();
    }

    public static InstantMessage create(ChatRoom chatRoom, String message) {
        return InstantMessage.builder()
                .chatRoom(chatRoom)
                .message(message)
                .build();
    }

    public void updateInfo(ChatRoom chatRoom, User user) {
        this.chatRoom = chatRoom;
        this.user = user;
    }
}
