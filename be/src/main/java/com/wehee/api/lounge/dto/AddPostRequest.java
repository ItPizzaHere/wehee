package com.wehee.api.lounge.dto;

public class AddPostRequest {
    private String title;
    private String content;
    private int userId;

    public AddPostRequest(String title, String content, int userId) {
        this.title = title;
        this.content = content;
        this.userId = userId;
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
}
