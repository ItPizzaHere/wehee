package com.wehee.api.lounge.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CommentDto {
    private int commentId;
    private int userId;
    private String nickname;
    private String profile;
    private String content;
    private String uploadTime;

    public CommentDto() {
    }

    public CommentDto(int commentId, int userId, String nickname, String profile, String content,
        LocalDateTime uploadTime) {
        this.commentId = commentId;
        this.userId = userId;
        this.nickname = nickname;
        this.profile = profile;
        this.content = content;
        this.uploadTime = uploadTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
    }

    public int getCommentId() {
        return commentId;
    }

    public int getUserId() {
        return userId;
    }

    public String getNickname() {
        return nickname;
    }

    public String getProfile() {
        return profile;
    }

    public String getContent() {
        return content;
    }

    public String getUploadTime() {
        return uploadTime;
    }
}
