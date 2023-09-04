package com.wehee.api.lounge.dto;

public class UpdatePostRequest {
    private int postId;
    private String title;
    private String content;

    public UpdatePostRequest() {
    }

    public UpdatePostRequest(int postId, String title, String content) {
        this.postId = postId;
        this.title = title;
        this.content = content;
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
}
