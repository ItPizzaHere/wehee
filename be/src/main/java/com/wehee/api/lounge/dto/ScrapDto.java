package com.wehee.api.lounge.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ScrapDto {
    private int postId;
    private String title;
    private String content;
    private int userId;
    private String nickname;
    private int hit;
    private int likeCount;
    private int commentCount;
    private String uploadTime;

    public ScrapDto() {
    }

    public ScrapDto(int postId, String title, String content, int userId, String nickname, int hit,
        int likeCount, int commentCount, LocalDateTime uploadTime) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.nickname = nickname;
        this.hit = hit;
        this.likeCount = likeCount;
        this.commentCount = commentCount;
        this.uploadTime = uploadTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
    }

    public int getPostId() {
        return postId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public int getUserId() {
        return userId;
    }

    public String getNickname() {
        return nickname;
    }

    public int getHit() {
        return hit;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public String getUploadTime() {
        return uploadTime;
    }
}
