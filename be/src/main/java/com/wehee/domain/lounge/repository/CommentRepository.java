package com.wehee.domain.lounge.repository;

import com.wehee.domain.lounge.entity.Comment;
import com.wehee.domain.lounge.entity.Like;
import com.wehee.domain.lounge.entity.Post;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CommentRepository {
    private final EntityManager em;

    public Comment findById(int id) {
        return em.find(Comment.class, id);
    }

    public int removeCommentRelatedToPost(Post post, LocalDateTime now) {
        Query query=em.createQuery("update Comment c set c.state = 2, c.deletedTime = :now where c.state = 0 and c.post = :post");
        query.setParameter("post", post);
        query.setParameter("now", now);
        try {
            return query.executeUpdate();
        } catch (NoResultException e) {
            return -1;
        }
    }
    public void removeComment(Comment comment) {
        em.remove(comment);
    }

    public void save(Comment comment) {
        em.persist(comment);
    }

    public List<Comment> findByPost(Post post) {
        TypedQuery<Comment> query =em.createQuery("select c from Comment c where c.post = :post and c.post.state = 0 and c.state = 0", Comment.class);
        query.setParameter("post", post);
        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }
}
