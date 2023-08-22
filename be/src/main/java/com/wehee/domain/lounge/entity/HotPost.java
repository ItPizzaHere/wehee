package com.wehee.domain.lounge.entity;

import jakarta.persistence.*;

import lombok.Getter;

@Entity
@Table(name="hot_post")
@Getter
public class HotPost {

    @Id @OneToOne
    @JoinColumn(name = "hot_post_id")
    private Post post;
    @Column(name = "`rank`")
    private int rank;

    public HotPost() {
    }

    public HotPost(Post post, int rank) {
        this.post = post;
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "HotPost{" +
                "post=" + post +
                ", rank=" + rank +
                '}';
    }
}
