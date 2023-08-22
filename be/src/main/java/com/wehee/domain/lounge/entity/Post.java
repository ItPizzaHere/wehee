package com.wehee.domain.lounge.entity;

import com.wehee.domain.user.entity.User;
import com.wehee.utils.MBTI;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import lombok.Getter;

@Entity
@Table(name="post")
@Getter
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postId;
    @Enumerated(EnumType.ORDINAL)
    @Column(name="post_mbti_id")
    private MBTI mbti;
    @Column(name="title")
    private String title;
    @Column(name="content")
    private String content;
    @JoinColumn(name="post_user_id")
    @ManyToOne
    private User postUser;
    @Column(name="like_count")
    private int likeCount;
    @Column(name="hit")
    private int hit;
    @Column(name="comment_count")
    private int commentCount;
    @Column(name="upload_time")
    private LocalDateTime uploadTime;
    @Column(name="state")
    private int state;
    @Column(name="deleted_time")
    private LocalDateTime deletedTime;

    public Post() {
        this.state=this.likeCount=this.commentCount=this.hit=0;
        this.uploadTime=LocalDateTime.now();
    }

    public Post(String title, String content, User postUser) {
        this.mbti = postUser.getMbti();
        this.title = title;
        this.content = content;
        this.postUser = postUser;
        this.uploadTime=LocalDateTime.now();
        this.likeCount=this.hit=this.commentCount=this.state=0;
    }

    public void setId(int id) {
        this.postId=id;
    }

    public void updateHit() {
        this.hit++;
    }

    public void setUser(User user) {
        this.postUser=user;
    }

    public void setMbti(MBTI mbti) {
        this.mbti=mbti;
    }

    public void updatePost(String title,String content) {
        this.title=title;
        this.content=content;
    }

    public void removePost() {
        this.state=1;
        this.deletedTime=LocalDateTime.now();
    }

    public void addLikeCount() {
        this.likeCount++;
    }

    public void substractLikeCount() {
        this.likeCount--;
    }

    public void addCommentCount() {
        this.commentCount++;
    }

    public void substractCommentCount() {
        this.commentCount--;
    }

    @Override
    public String toString() {
        return "Post{" +
            "postId=" + postId +
            ", mbti=" + mbti +
            ", title='" + title + '\'' +
            ", content='" + content + '\'' +
            ", postUser=" + postUser +
            ", likeCount=" + likeCount +
            ", hit=" + hit +
            ", commentCount=" + commentCount +
            ", uploadTime=" + uploadTime +
            ", state=" + state +
            '}';
    }
}
