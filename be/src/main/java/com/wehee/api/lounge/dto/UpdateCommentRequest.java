package com.wehee.api.lounge.dto;

public class UpdateCommentRequest {
    private int commentId;
    private String content;

    public UpdateCommentRequest() {
    }

    public UpdateCommentRequest(int commentId, String content) {
        this.commentId = commentId;
        this.content = content;
    }

    public int getCommentId() {
        return commentId;
    }

    public String getContent() {
        return content;
    }
}
