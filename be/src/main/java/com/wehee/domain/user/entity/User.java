package com.wehee.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wehee.domain.auth.entity.Provider;
import com.wehee.domain.auth.entity.Role;
import com.wehee.domain.chat.entity.InstantMessage;
import com.wehee.domain.chat.entity.RoleStatus;
import com.wehee.domain.chat.entity.UserTag;
import com.wehee.utils.MBTI;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "`user`")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(unique = true)
    private String providerId;
    @Enumerated(EnumType.STRING)
    private Provider provider;
    private String birth;
    private Gender gender;
    private String email;
    @Column(length = 512)
    private String profile;

    private String nickname;
    @Enumerated(EnumType.ORDINAL)
    private MBTI mbti;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Temporal(TemporalType.DATE)
    private LocalDate lastMbtiModified;
    private boolean birthChanged;
    private boolean genderChanged;
    private boolean withdrawal;

    @Temporal(TemporalType.DATE)
    private LocalDate created;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<UserTag> userTags;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<InstantMessage> messages;

    @Builder
    public User(
            String providerId, Provider provider, String birth, Gender gender, String email, String profile,
            String nickname, Role role, LocalDate now) {
        this.providerId = providerId;
        this.provider = provider;
        this.birth = birth;
        this.gender = gender;
        this.email = email;
        this.profile = profile;
        this.nickname = nickname;
        this.mbti = MBTI.NONE;
        this.role = role;
        this.lastMbtiModified = now;
        this.birthChanged = false;
        this.genderChanged = false;
        this.withdrawal = false;
        this.created = now;
        this.userTags = new ArrayList<>();
        this.messages = new ArrayList<>();
    }

    public static User create(
            String providerId, Provider provider, String birth, Gender gender, String email, String profile,
            String nickname, Role role, LocalDate now) {
        return User.builder()
                .providerId(providerId)
                .provider(provider)
                .birth(birth)
                .gender(gender)
                .email(email)
                .profile(profile)
                .nickname(nickname)
                .role(role)
                .now(now)
                .build();
    }

    /*
     * UPDATE INFORMATION
     */

    public void registerUserInformation(String nickname, MBTI mbti, Gender gender, String birth) {
        this.nickname = nickname;
        this.mbti = mbti;
        this.gender = gender;
        this.birth = birth;
    }

    public void updateNickname(String nickname) {
        this.nickname = nickname;
    }

    public void updateMbti(MBTI mbti) {
        this.mbti = mbti;
        this.lastMbtiModified = LocalDate.now();
    }

    public void updateBirth(String birth) {
        this.birth = birth;
        this.birthChanged = true;
    }

    public void updateGender(Gender gender) {
        this.gender = gender;
        this.genderChanged = true;
    }

    public void updateWithdraw() {
        this.withdrawal = true;
        this.nickname = null;
    }

    /*
     * GET INFORMATION
     */

    public int getAge() {
        LocalDate now = LocalDate.now();
        return now.getYear() - Integer.parseInt(birth);
    }

    /*
     * CHECK
     */

    public boolean isEqualProvider(Provider provider) {
        return this.provider.equals(provider);
    }

    public boolean isMbtiChangeable() {
        LocalDate now = LocalDate.now();
        long weeks = ChronoUnit.WEEKS.between(lastMbtiModified, now);
        return weeks >= 5;
    }

    public boolean isJoinedLessThen(int limit) {
        int count = 0;

        for (UserTag userTag : userTags) {
            if (RoleStatus.isParticipating(userTag.getRoleStatus())) {
                count++;
            }
        }

        return count < limit;
    }
}
