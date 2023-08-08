package com.wehee.api.lounge.dto;

public class LikeRequest {
    private int userId;
    private int postId;

    public LikeRequest(int userId, int postId) {
        this.userId = userId;
        this.postId = postId;
    }

    public int getUserId() {
        return userId;
    }

    public int getPostId() {
        return postId;
    }
}
