package com.wehee.api.lounge.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ListPostDto {
    private int postId;
    private String title;
    private String content;
    private int commentCount;
    private int userId;
    private String nickname;
    private int likeCount;
    private int hit;
    private String uploadTime;

    public ListPostDto() {
    }

    public ListPostDto(int postId, String title, String content, int commentCount, int userId,
        String nickname, int likeCount, int hit, LocalDateTime uploadTime) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.commentCount = commentCount;
        this.userId = userId;
        this.nickname = nickname;
        this.likeCount = likeCount;
        this.hit = hit;
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

    public int getCommentCount() {
        return commentCount;
    }

    public int getUserId() {
        return userId;
    }

    public String getNickname() {
        return nickname;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public int getHit() {
        return hit;
    }

    public String getUploadTime() {
        return uploadTime;
    }
}
