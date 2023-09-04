package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.util.List;

public class ListPostResponse {
    private int state;
    private MBTI mbti;
    private int totalCount;
    private List<ListPostDto> post;
    private String message;

    public ListPostResponse() {
    }

    public ListPostResponse(String message) {
        this.state=-1;
        this.totalCount=0;
        this.message = message;
    }

    public ListPostResponse(int totalCount, String message) {
        this.state=-1;
        this.totalCount = totalCount;
        this.message = message;
    }

    public ListPostResponse(MBTI mbti, int totalCount, List<ListPostDto> post) {
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

    public List<ListPostDto> getPost() {
        return post;
    }

    public String getMessage() {
        return message;
    }
}
