package com.wehee.domain.voice.entity;

import com.wehee.api.voice.dto.VoiceRoomCreateRequestDto;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.entity.UserProfile;
import com.wehee.domain.voice.exception.VoiceRoomExceedLimitException;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "voice_room")
public class VoiceRoom {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "voice_room_id")
    private Long id;

    @OneToMany(mappedBy = "voiceRoom", cascade = CascadeType.ALL)
    private List<VoiceUserTag> joinedUser;

    private String title;
    private String description;

    @Column(name = "user_limit")
    private int limit;

    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    @Temporal(TemporalType.TIMESTAMP)
    private Date closed;

    @Builder
    public VoiceRoom(String title, String description, int limit) {
        this.joinedUser = new ArrayList<>();
        this.title = title;
        this.description = description;
        this.limit = limit;
        this.created = new Date();
        this.closed = null;
    }

    public static VoiceRoom from(VoiceRoomCreateRequestDto requestDto) {
        return VoiceRoom.builder()
            .title(requestDto.getTitle())
            .description(requestDto.getDescription())
            .limit(requestDto.getLimit())
            .build();
    }

    public void updateInfo(String title, String description, int limit) {
        this.title = title;
        this.description = description;
        this.limit = limit;
    }

    public void close() {
        joinedUser = joinedUser.stream()
            .filter(u -> VoiceRoleStatus.isJoining(u.getVoiceRoleStatus()))
            .map(u -> u.updateRoleStatus(VoiceRoleStatus.EXPIRED))
            .collect(Collectors.toList());
        closed = new Date();
    }

    public void leave(User user) {
        for (VoiceUserTag voiceUserTag : joinedUser) {
            if (voiceUserTag.getUser().getProviderId().equals(user.getProviderId())) {
                voiceUserTag.updateRoleStatus(VoiceRoleStatus.EXITED);
                return;
            }
        }
    }

    public User findOwner() {
        for (VoiceUserTag voiceUserTag : joinedUser) {
            if (VoiceRoleStatus.OWNER.equals(voiceUserTag.getVoiceRoleStatus())) {
                return voiceUserTag.getUser();
            }
        }
        return null;
    }

    public int getJoinedUserNumber() {
        int count = 0;
        for (VoiceUserTag voiceUserTag : joinedUser) {
            if (VoiceRoleStatus.isJoining(voiceUserTag.getVoiceRoleStatus())) {
                count++;
            }
        }
        return count;
    }

    public List<UserProfile> describeJoinedUser() {
        return joinedUser.stream()
            .filter(u -> VoiceRoleStatus.isJoining(u.getVoiceRoleStatus()))
            .map(u -> UserProfile.from(u.getUser()))
            .collect(Collectors.toList());
    }

    public void addJoinedUser(VoiceUserTag voiceUserTag) {
        if (joinedUser.size() >= limit) {
            throw new VoiceRoomExceedLimitException(limit);
        }
        this.joinedUser.add(voiceUserTag);
    }
}
