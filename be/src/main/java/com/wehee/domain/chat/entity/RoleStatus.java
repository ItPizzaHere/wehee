package com.wehee.domain.chat.entity;

public enum RoleStatus {
    OWNER, MEMBER, OUTCAST, EXPIRED;

    public static boolean isJoining(RoleStatus roleStatus) {
        return roleStatus.equals(MEMBER);
    }

    public static boolean isParticipating(RoleStatus roleStatus) {
        return !roleStatus.equals(OUTCAST) && !roleStatus.equals(EXPIRED);
    }
}
