package com.wehee.domain.lounge.repository;

import com.wehee.domain.lounge.entity.HotPost;
import jakarta.persistence.EntityManager;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class HotPostRepository {
    private final EntityManager em;

    public List<HotPost> findAll() {
        return em.createQuery("select h from HotPost h order by h.rank", HotPost.class).getResultList();
    }
}
