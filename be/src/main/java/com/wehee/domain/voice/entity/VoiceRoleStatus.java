package com.wehee.domain.voice.entity;

public enum VoiceRoleStatus {
    OWNER, MEMBER, OUTCAST, EXPIRED, EXITED;

    public static boolean isJoining(VoiceRoleStatus roleStatus) {
        return roleStatus.equals(MEMBER);
    }

    public static boolean isParticipating(VoiceRoleStatus roleStatus) {
        return roleStatus.equals(OWNER) || roleStatus.equals(MEMBER);
    }
}
