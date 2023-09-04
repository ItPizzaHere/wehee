package com.wehee.domain.lounge.repository;

import com.wehee.domain.lounge.entity.Like;
import com.wehee.domain.lounge.entity.Post;
import com.wehee.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LikeRepository {
    private final EntityManager em;

    public Like findById(int id) {
        return em.find(Like.class, id);
    }

    public void removeLike(Like like) {
        em.remove(like);
    }

    public void save(Like like) {
        em.persist(like);
    }

    public Like find(User user, Post post) {
        TypedQuery<Like> query =em.createQuery("select l from Like l where l.post = :post and l.user = :user", Like.class);
        query.setParameter("user", user);
        query.setParameter("post", post);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public boolean findIfExists(User user, Post post) {
        TypedQuery<Long> query =em.createQuery("select count(*) from Like l where l.post = :post and l.user = :user", Long.class);
        query.setParameter("user", user);
        query.setParameter("post", post);
        try {
            return query.getSingleResult()==1L;
        } catch (NoResultException e) {
            return false;
        }
    }
}
