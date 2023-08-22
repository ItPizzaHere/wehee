package com.wehee.api.lounge.dto;

public class LoungeResponse {
    private int state;
    private String message;

    public LoungeResponse() {
        this.state=1;
    }

    public LoungeResponse(int state) {
        this.state = state;
    }

    public LoungeResponse(String message) {
        this.state=-1;
        this.message=message;
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
