package com.wehee.api.lounge.dto;

import com.wehee.utils.MBTI;

public class HotPostDto {
    private int postId;
    private int rank;
    private MBTI mbti;
    private String title;
    private int commentCount;
    private int likeCount;
    private int hit;
    private int state;

    public HotPostDto() {
    }

    public HotPostDto(int postId, int rank, MBTI mbti, String title, int commentCount, int likeCount, int hit, int state) {
        this.postId = postId;
        this.rank = rank;
        this.mbti = mbti;
        this.title = title;
        this.commentCount = commentCount;
        this.likeCount = likeCount;
        this.hit = hit;
        this.state=state;
    }

    public int getPostId() {
        return postId;
    }

    public int getRank() {
        return rank;
    }

    public MBTI getMbti() {
        return mbti;
    }

    public String getTitle() {
        return title;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public int getHit() {
        return hit;
    }

    public int getState() {
        return state;
    }
}
