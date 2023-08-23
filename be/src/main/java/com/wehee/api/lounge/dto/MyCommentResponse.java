package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.util.List;

public class MyCommentResponse {
    private int state;
    private MBTI mbti;
    private int totalCount;
    private List<MyCommentDto> post;
    private String message;

    public MyCommentResponse() {
    }

    public MyCommentResponse(String message) {
        this.state=-1;
        this.totalCount=0;
        this.message = message;
    }

    public MyCommentResponse(int totalCount, String message) {
        this.state=-1;
        this.totalCount = totalCount;
        this.message = message;
    }

    public MyCommentResponse(MBTI mbti, int totalCount, List<MyCommentDto> post) {
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

    public List<MyCommentDto> getPost() {
        return post;
    }

    public String getMessage() {
        return message;
    }
}
