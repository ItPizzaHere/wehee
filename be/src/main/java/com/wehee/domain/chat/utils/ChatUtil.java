package com.wehee.domain.chat.utils;

public class ChatUtil {

    public static String message(String chatRoomId) {
        return "/topic/" + chatRoomId + ".public.messages";
    }

    public static String connectedUsers(String chatRoomId) {
        return "/topic/" + chatRoomId + ".connected.users";
    }
}
