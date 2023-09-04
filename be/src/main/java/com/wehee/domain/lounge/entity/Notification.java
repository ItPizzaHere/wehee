package com.wehee.domain.lounge.entity;

import com.wehee.domain.user.entity.User;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import lombok.Getter;

@Entity
@Table(name="notification")
@Getter
public class Notification {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notificationId;
    @JoinColumn(name = "notification_receiver_user_id")
    @ManyToOne
    private User notificationReceiverUserId;
    @JoinColumn(name = "notification_sender_user_id")
    @ManyToOne
    private User notificationSenderUserId;
    @Column(name = "upload_time")
    private LocalDateTime uploadTime;
    @Column(name = "is_post")
    private boolean isPost;
    @Column(name = "origin_post_id")
    private int originPostId;
    @Column(name = "browsed")
    private  boolean browsed;

    public Notification() {
    }

    public Notification(User notificationReceiverUserId, User notificationSenderUserId, boolean isPost, int originPostId) {
        this.notificationReceiverUserId = notificationReceiverUserId;
        this.notificationSenderUserId = notificationSenderUserId;
        this.isPost = isPost;
        this.originPostId = originPostId;
        this.uploadTime=LocalDateTime.now();
        this.browsed=false;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "notificationId=" + notificationId +
                ", notificationReceiverUserId=" + notificationReceiverUserId +
                ", notificationSenderUserId=" + notificationSenderUserId +
                ", uploadTime=" + uploadTime +
                ", isPost=" + isPost +
                ", originPostId=" + originPostId +
                ", browsed=" + browsed +
                '}';
    }
}
