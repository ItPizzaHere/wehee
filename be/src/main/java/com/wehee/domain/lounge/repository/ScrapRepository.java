package com.wehee.domain.lounge.repository;

import com.wehee.domain.lounge.entity.Post;
import com.wehee.domain.lounge.entity.Scrap;
import com.wehee.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ScrapRepository {
    private final EntityManager em;

    public Scrap findById(int id) {
        return em.find(Scrap.class, id);
    }

    public void save(Scrap scrap) {
        em.persist(scrap);
    }

    public void removeScrap(Scrap scrap) {
        em.remove(scrap);
    }

    public Scrap findByUserAndPost(User user, Post post) {
        TypedQuery<Scrap> query = em.createQuery("select m from Scrap m where m.user = :user and m.post = :post", Scrap.class);
        query.setParameter("user", user);
        query.setParameter("post", post);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public List<Scrap> findByUser(User user) {
        TypedQuery<Scrap> query = em.createQuery("select m from Scrap m where m.user = :user and m.post.state = 0 and m.post.mbti = :mbti", Scrap.class);
        query.setParameter("user", user);
        query.setParameter("mbti", user.getMbti());
        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public boolean findIfExists(User user, Post post) {
        TypedQuery<Long> query =em.createQuery("select count(*) from Scrap s where s.post = :post and s.user = :user", Long.class);
        query.setParameter("user", user);
        query.setParameter("post", post);
        try {
            return query.getSingleResult()==1L;
        } catch (NoResultException e) {
            return false;
        }
    }
}
