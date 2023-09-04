package com.wehee.domain.chat.entity;

import com.wehee.api.chat.dto.ChatRoomCreateRequestDto;
import com.wehee.domain.chat.exception.ChatRoomExceedLimitException;
import com.wehee.domain.chat.utils.TargetMbtisConverter;
import com.wehee.domain.user.entity.UserProfile;
import com.wehee.domain.user.entity.Gender;
import com.wehee.domain.user.entity.User;
import com.wehee.utils.MBTI;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.ArrayList;
import java.util.Arrays;
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
@Table(name = "chat_room")
public class ChatRoom {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_room_id")
    private long id;

    @OneToMany(mappedBy = "chatRoom", cascade = CascadeType.ALL)
    private List<UserTag> joinedUser;

    private String title;
    private ChatCategory category;

    @Column(name = "user_limit")
    private int limit;

    @Convert(converter = TargetMbtisConverter.class)
    private List<MBTI> targetMbtis;
    private Gender targetGender;

    private int minAge;
    private int maxAge;

    private String announcement;

    @OneToMany(mappedBy = "chatRoom", cascade = CascadeType.ALL)
    private List<InstantMessage> messages;

    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    @Temporal(TemporalType.TIMESTAMP)
    private Date closed;

    @Builder
    public ChatRoom(String title, ChatCategory category, int limit,
            List<MBTI> targetMbtis, Gender targetGender, int minAge, int maxAge) {
        this.joinedUser = new ArrayList<>();
        this.title = title;
        this.category = category;
        this.limit = limit;
        this.targetMbtis = targetMbtis;
        this.targetGender = targetGender;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.announcement = null;
        this.created = new Date();
        this.closed = null;
        this.messages = new ArrayList<>();
    }

    public static ChatRoom from(ChatRoomCreateRequestDto requestDto) {
        List<MBTI> targetMbtis = requestDto.getMbtis().stream()
                .map(MBTI::valueOf)
                .toList();

        int minAge = 0;
        int maxAge = 0;
        if (requestDto.getMinAge() <= requestDto.getMaxAge()) {
            minAge = requestDto.getMinAge();
            maxAge = requestDto.getMaxAge();
        } else {
            minAge = requestDto.getMaxAge();
            maxAge = requestDto.getMinAge();
        }

        return ChatRoom.builder()
                .title(requestDto.getTitle())
                .category(ChatCategory.fromDisplayName(requestDto.getCategory()))
                .limit(requestDto.getLimit())
                .targetMbtis(targetMbtis)
                .targetGender(Gender.fromCode(requestDto.getGender()))
                .minAge(minAge)
                .maxAge(maxAge)
                .build();
    }

    public void updateInfo(String title, ChatCategory category, int limit) {
        this.title = title;
        this.category = category;
        this.limit = limit;
    }

    public void updateAnnouncement(String announcement) {
        this.announcement = announcement;
    }

    public void close() {
        joinedUser = joinedUser.stream()
            .filter(u -> RoleStatus.isJoining(u.getRoleStatus()))
            .map(u -> u.updateRoleStatus(RoleStatus.EXPIRED))
            .collect(Collectors.toList());
        closed = new Date();
    }

    public void leave(User user) {
        for (UserTag userTag : joinedUser) {
            if (userTag.getUser().getProviderId().equals(user.getProviderId())) {
                userTag.updateRoleStatus(RoleStatus.EXITED);
                return;
            }
        }
    }

    public User findOwner() {
        for (UserTag userTag : joinedUser) {
            if (RoleStatus.OWNER.equals(userTag.getRoleStatus())) {
                return userTag.getUser();
            }
        }
        return null;
    }

    public int getJoinedUserNumber() {
        int count = 0;
        for (UserTag userTag : joinedUser) {
            if (RoleStatus.isParticipating(userTag.getRoleStatus())) {
                count++;
            }
        }
        return count;
    }

    public List<UserProfile> describeJoinedUser() {
        return joinedUser.stream()
            .filter(u -> RoleStatus.isParticipating(u.getRoleStatus()))
            .map(u -> UserProfile.from(u.getUser()))
            .collect(Collectors.toList());
    }

    public UserTag findUser(User user) {
        for (UserTag userTag : joinedUser) {
            if (userTag.getUser().getProviderId().equals(user.getProviderId())) {
                return userTag;
            }
        }

        return null;
    }

    public void addJoinedUser(UserTag userTag) {
        if (joinedUser.size() >= limit) {
            throw new ChatRoomExceedLimitException(limit);
        }

        this.joinedUser.add(userTag);
    }
}
