package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.util.List;

public class MyPostResponse {
    private int state;
    private MBTI mbti;
    private int totalCount;
    private List<MyPostDto> post;
    private String message;

    public MyPostResponse() {
    }

    public MyPostResponse(String message) {
        this.state=-1;
        this.totalCount=0;
        this.message = message;
    }

    public MyPostResponse(int totalCount, String message) {
        this.state=-1;
        this.totalCount = totalCount;
        this.message = message;
    }

    public MyPostResponse(MBTI mbti, int totalCount, List<MyPostDto> post) {
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

    public List<MyPostDto> getPost() {
        return post;
    }

    public String getMessage() {
        return message;
    }
}
