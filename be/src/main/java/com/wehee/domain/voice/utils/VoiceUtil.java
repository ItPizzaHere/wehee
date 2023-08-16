package com.wehee.domain.voice.utils;

public class VoiceUtil {

    public static String message(String voiceRoomId) {
        return "/topic/" + voiceRoomId + ".public.messages";
    }

    public static String connectedUsers(String voiceRoomId) {
        return "/topic/" + voiceRoomId + ".connected.users";
    }
}
