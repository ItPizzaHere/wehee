package com.wehee.api.lounge.dto;

public class AddCommentRequest {
    private int postId;
    private String content;

    public AddCommentRequest() {
    }

    public AddCommentRequest(int postId, String content) {
        this.postId = postId;
        this.content = content;
    }

    public int getPostId() {
        return postId;
    }

    public String getContent() {
        return content;
    }
}
