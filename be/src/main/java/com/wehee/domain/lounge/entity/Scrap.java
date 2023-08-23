package com.wehee.domain.lounge.entity;

import com.wehee.domain.user.entity.User;
import jakarta.persistence.*;

import lombok.Getter;

@Entity
@Table(name="scrap")
@Getter
public class Scrap {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int scrapId;
    @ManyToOne
    @JoinColumn(name = "scrap_post_id")
    private Post post;
    @ManyToOne
    @JoinColumn(name = "scrap_user_id")
    private User user;

    public Scrap(Post post, User user) {
        this.post = post;
        this.user = user;
    }

    public Scrap() {
    }

    @Override
    public String toString() {
        return "Scrap{" +
                "scrapId=" + scrapId +
                ", post=" + post +
                ", user=" + user +
                '}';
    }
}
