package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class PostResponse {

    private int state;
    private int postId;
    private MBTI mbti;
    private String title;
    private String content;
    private int userId;
    private String nickname;
    private String profile;
    private String uploadTime;
    private int commentCount;
    private boolean liked;
    private int likeCount;
    private boolean scrapped;
    private int hit;
    private List<CommentDto> commentList;
    private String message;

    public PostResponse() {
    }

    public PostResponse(String message) {
        this.state=-1;
        this.message = message;
    }

    public PostResponse(int postId, MBTI mbti, String title, String content,
        int userId,
        String nickname, String profile, LocalDateTime uploadTime, int commentCount, boolean liked, int likeCount,
        boolean scrapped, int hit, List<CommentDto> commentList) {
        this.state = 1;
        this.postId = postId;
        this.mbti = mbti;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.nickname = nickname;
        this.profile = profile;
        this.uploadTime = uploadTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        this.commentCount = commentCount;
        this.liked = liked;
        this.likeCount = likeCount;
        this.scrapped = scrapped;
        this.hit = hit;
        this.commentList = commentList;
    }

    public PostResponse(int state, int postId, MBTI mbti, String title, String content, int userId, String nickname, String profile, LocalDateTime uploadTime, int commentCount, boolean liked, int likeCount, boolean scrapped, int hit, List<CommentDto> commentList) {
        this.state = state;
        this.postId = postId;
        this.mbti = mbti;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.nickname = nickname;
        this.profile = profile;
        this.uploadTime = uploadTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        this.commentCount = commentCount;
        this.liked = liked;
        this.likeCount = likeCount;
        this.scrapped = scrapped;
        this.hit = hit;
        this.commentList = commentList;
    }

    public int getState() {
        return state;
    }

    public int getPostId() {
        return postId;
    }

    public MBTI getMbti() {
        return mbti;
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

    public int getCommentCount() {
        return commentCount;
    }

    public boolean isLiked() {
        return liked;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public boolean isScrapped() {
        return scrapped;
    }

    public int getHit() {
        return hit;
    }

    public List<CommentDto> getCommentList() {
        return commentList;
    }

    public String getMessage() {
        return message;
    }

    public String getProfile() {
        return profile;
    }

    public String getUploadTime() {
        return uploadTime;
    }
}
