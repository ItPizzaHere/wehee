package com.wehee.domain.lounge.entity;

import com.wehee.domain.user.entity.User;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import lombok.Getter;

@Entity
@Table(name="`comment`")
@Getter
public class Comment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;
    @JoinColumn(name = "comment_post_id")
    @ManyToOne
    private Post post;
    @ManyToOne
    @JoinColumn(name = "comment_user_id")
    private User user;
    @Column(name = "content")
    private String content;
    @Column(name = "upload_time")
    private LocalDateTime uploadTime;
    @Column(name = "state")
    private int state;
    @Column(name="deleted_time")
    private LocalDateTime deletedTime;

    public Comment() {
        this.uploadTime=LocalDateTime.now();
        this.state=0;
    }

    public Comment(Post post, User user, String content) {
        this.post = post;
        this.user = user;
        this.content = content;
        this.uploadTime=LocalDateTime.now();
        this.state=0;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", post=" + post +
                ", user=" + user +
                ", content='" + content + '\'' +
                ", uploadTime=" + uploadTime +
                ", state=" + state +
                '}';
    }

    public void updateContent(String content) {
        this.content=content;
    }

    public void delete() {
        this.state=1;
        this.deletedTime=LocalDateTime.now();
    }
}
