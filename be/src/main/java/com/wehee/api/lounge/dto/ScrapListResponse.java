package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.util.List;

public class ScrapListResponse {
    private int state;
    private MBTI mbti;
    private int totalCount;
    private List<ScrapDto> post;
    private String message;

    public ScrapListResponse() {
    }

    public ScrapListResponse(String message) {
        this.state=-1;
        this.totalCount=0;
        this.message = message;
    }

    public ScrapListResponse(int totalCount, String message) {
        this.state=-1;
        this.totalCount = totalCount;
        this.message = message;
    }

    public ScrapListResponse(MBTI mbti, int totalCount, List<ScrapDto> post) {
        this.state = 1;
        this.mbti = mbti;
        this.totalCount = totalCount;
        this.post = post;
    }

    public int getState() {
        return state;
    }

    public MBTI getMbti() {
        return mbti;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public List<ScrapDto> getPost() {
        return post;
    }

    public String getMessage() {
        return message;
    }
}
