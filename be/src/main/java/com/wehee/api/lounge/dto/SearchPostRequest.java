package com.wehee.api.lounge.dto;

public class SearchPostRequest {
    private String keyword;
    private int page;

    public SearchPostRequest() {
    }

    public SearchPostRequest(String keyword) {
        this.page=1;
        this.keyword = keyword;
    }

    public SearchPostRequest(String keyword, int page) {
        this.keyword = keyword;
        this.page = page;
    }

    public String getKeyword() {
        return keyword;
    }

    public int getPage() {
        return page;
    }
}
