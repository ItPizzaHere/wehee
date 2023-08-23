package com.wehee.api.lounge.dto;

import java.util.List;

public class CommentResponse {
    private int state;
    private List<CommentDto> commentList;
    private String message;

    public CommentResponse() {
    }

    public CommentResponse(String message) {
        this.state=-1;
        this.message = message;
    }

    public CommentResponse(List<CommentDto> commentList) {
        this.state = 1;
        this.commentList = commentList;
    }

    public int getState() {
        return state;
    }

    public List<CommentDto> getCommentList() {
        return commentList;
    }

    public String getMessage() {
        return message;
    }
}
