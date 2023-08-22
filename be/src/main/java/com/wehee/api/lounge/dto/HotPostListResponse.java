package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;
import java.util.List;
import java.util.Map;

public class HotPostListResponse {
    private int state;
    private int mbtiCount;
    private Map<MBTI,Integer> mbtiList;
    private List<HotPostDto> post;
    private String message;

    public HotPostListResponse() {
    }

    public HotPostListResponse(String message) {
        this.state=-1;
        this.message = message;
    }

    public HotPostListResponse(int mbtiCount, Map<MBTI, Integer> mbtiList, List<HotPostDto> post) {
        this.state = 1;
        this.mbtiCount = mbtiCount;
        this.mbtiList = mbtiList;
        this.post = post;
    }

    public int getState() {
        return state;
    }

    public int getMbtiCount() {
        return mbtiCount;
    }

    public Map<MBTI, Integer> getMbtiList() {
        return mbtiList;
    }

    public List<HotPostDto> getPost() {
        return post;
    }

    public String getMessage() {
        return message;
    }
}
