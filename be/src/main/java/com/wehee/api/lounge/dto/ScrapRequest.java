package com.wehee.api.lounge.dto;

public class ScrapRequest {
    private int postId;
    boolean scrapped;

    public ScrapRequest() {
    }

    public ScrapRequest(int postId, boolean scrapped) {
        this.postId = postId;
        this.scrapped = scrapped;
    }

    public int getPostId() {
        return postId;
    }

    public boolean isScrapped() {
        return scrapped;
    }
}
