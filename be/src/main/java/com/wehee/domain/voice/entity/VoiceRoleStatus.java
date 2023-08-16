package com.wehee.domain.voice.entity;

public enum VoiceRoleStatus {
    OWNER, SPEAKER, LISTENER, OUTCAST, EXPIRED, EXITED;

    public static boolean isJoining(VoiceRoleStatus voiceRoleStatus) {
        return voiceRoleStatus.equals(LISTENER) || voiceRoleStatus.equals(SPEAKER);
    }

    public static boolean isParticipating(VoiceRoleStatus voiceRoleStatus) {
        return voiceRoleStatus.equals(OWNER) || voiceRoleStatus.equals(SPEAKER) || voiceRoleStatus.equals(LISTENER);
    }
}
