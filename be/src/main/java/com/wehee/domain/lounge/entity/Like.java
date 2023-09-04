package com.wehee.domain.lounge.entity;

import com.wehee.domain.user.entity.User;
import jakarta.persistence.*;

import lombok.Getter;

@Entity
@Table(name="`like`")
@Getter
public class Like {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int likeId;
    @ManyToOne
    @JoinColumn(name = "like_post_id")
    private Post post;
    @ManyToOne
    @JoinColumn(name = "like_user_id")
    private User user;

    public Like() {
    }

    public Like(Post post, User user) {
        this.post = post;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Like{" +
                "likeId=" + likeId +
                ", post=" + post +
                ", user=" + user +
                '}';
    }
}
