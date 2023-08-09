package com.wehee.api.lounge.dto;

public class LikeRequest {
    private int postId;
    private boolean liked;

    public LikeRequest() {
    }

    public LikeRequest(int postId, boolean liked) {
        this.postId = postId;
        this.liked = liked;
    }

    public int getPostId() {
        return postId;
    }

    public boolean isLiked() {
        return liked;
    }
}
