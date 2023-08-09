package com.wehee.api.lounge.dto;

public class LoungeResponse {
    private int state;
    private String message;

    public LoungeResponse() {
    }

    public LoungeResponse(int state, String message) {
        this.state = state;
        this.message = message;
    }

    public int getState() {
        return state;
    }

    public String getMessage() {
        return message;
    }
}
