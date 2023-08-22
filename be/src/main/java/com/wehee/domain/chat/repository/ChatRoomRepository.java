package com.wehee.domain.chat.repository;

import com.wehee.domain.chat.entity.ChatCategory;
import com.wehee.domain.chat.entity.ChatRoom;
import com.wehee.domain.user.entity.Gender;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {

    @Query("select c from ChatRoom c where c.id = :id")
    Optional<ChatRoom> findById(@Param("id") Long id);

    @Query("select c from ChatRoom c where (c.targetGender in :genders and c.minAge <= :age and c.maxAge >= :age) order by c.created desc")
    List<ChatRoom> findByUserCondition(@Param("genders") List<Gender> genders, @Param("age") int age);

    @Query("select c from ChatRoom c where (c.targetGender in :genders and c.minAge <= :age and c.maxAge >= :age and c.title LIKE %:keyword%) order by c.created desc")
    List<ChatRoom> findByUserConditionAndKeyword(@Param("genders") List<Gender> genders, @Param("age") int age, @Param("keyword") String keyword);

    @Query("select c from ChatRoom c where (c.targetGender in :genders and c.minAge <= :age and c.maxAge >= :age and c.category in :categories) order by c.created desc")
    List<ChatRoom> findByUserConditionAndCategory(@Param("genders") List<Gender> genders, @Param("age") int age, @Param("categories") List<ChatCategory> categories);

    @Query("select c from ChatRoom c where (c.targetGender in :genders and c.minAge <= :age and c.maxAge >= :age and c.category in :categories and c.title LIKE %:keyword%) order by c.created desc")
    List<ChatRoom> findByAllCondition(@Param("genders") List<Gender> genders, @Param("age") int age, @Param("keyword") String keyword, @Param("categories") List<ChatCategory> categories);
}
