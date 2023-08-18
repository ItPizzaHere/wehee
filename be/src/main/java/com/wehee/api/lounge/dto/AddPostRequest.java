package com.wehee.api.lounge.dto;

public class AddPostRequest {
    private String title;
    private String content;

    public AddPostRequest() {
    }

    public AddPostRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
