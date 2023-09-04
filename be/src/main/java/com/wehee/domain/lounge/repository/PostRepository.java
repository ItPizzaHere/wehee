package com.wehee.domain.lounge.repository;

import com.wehee.domain.lounge.entity.Post;
import com.wehee.domain.user.entity.User;
import com.wehee.utils.MBTI;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;

import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PostRepository {
    private final EntityManager em;

    public Post findById(int id) {
        return em.find(Post.class, id);
    }

    public void save(Post post) {
        em.persist(post);
    }

    public List<Post> findByMbti(MBTI mbti) {
        TypedQuery<Post> query = em.createQuery("select m from Post m where m.mbti = :mbti and state = 0 order by m.uploadTime desc", Post.class);
        query.setParameter("mbti", mbti);
        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public List<Post> searchPostByCommentKeyword(MBTI mbti,String keyword) {
        TypedQuery<Post> query = em.createQuery("select distinct c.post from Comment c where c.post.mbti = :mbti and c.post.state = 0 and c.state = 0 and c.content like concat('%',:keyword,'%') order by c.post.uploadTime desc", Post.class);
        query.setParameter("mbti", mbti);
        query.setParameter("keyword", keyword);

        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public List<Post> searchPostByKeyword(MBTI mbti,String keyword) {
        TypedQuery<Post> query = em.createQuery("select p from Post p where p.mbti = :mbti and p.state = 0 and (p.content like concat('%',:keyword,'%') or p.title like concat('%',:keyword,'%')) order by p.uploadTime desc", Post.class);
        query.setParameter("mbti", mbti);
        query.setParameter("keyword", keyword);

        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public List<Post> findMyPost(User user) {
        TypedQuery<Post> query = em.createQuery("select m from Post m where m.postUser = :user and m.mbti = :mbti and m.state = 0 order by m.uploadTime desc", Post.class);
        query.setParameter("user", user);
        query.setParameter("mbti", user.getMbti());

        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public List<Post> findMyComment(User user) {
        TypedQuery<Post> query = em.createQuery("select distinct m.post from Comment m where m.user = :user and m.post.state = 0 and m.state = 0 and m.post.mbti = :mbti order by m.post.uploadTime desc", Post.class);
        query.setParameter("user", user);
        query.setParameter("mbti", user.getMbti());

        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public Post findHotPostById(int postId) {
        TypedQuery<Post> query = em.createQuery("select h.post from HotPost h where h.post.postId = :postId", Post.class);
        query.setParameter("postId", postId);

        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}
