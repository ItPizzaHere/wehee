import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import BoardListItemHot from 'components/board/BoardListItemHot';
import { listHotPost } from 'services/loungeService';

interface BoardItem {
  postId: number;
  rank: number;
  mbti: string;
  title: string;
  hit: number;
  likeCount: number;
  commentCount: number;
}

function BoardHot() {
  let post: Array<BoardItem>=[];

  const data=listHotPost();
  const [boardList, setBoardList] = useState(data);
  const [postList, setPostList] = useState<BoardItem[]>([]);

  useEffect(() => {
    const fetchData=async() => {
      setBoardList(data);
      await boardList.then((promiseResult) => {
        post=promiseResult.post;
      }).catch((error) => {
        console.error("Promise에서 오류 발생", error);
      });

      const postLength = post === null ? 0 : post.length;

      const postData = Array.from({ length: postLength }, (v, k) => ({
        postId: post[k].postId,
        rank: post[k].rank,
        mbti: post[k].mbti,
        title: post[k].title,
        hit: post[k].hit,
        likeCount: post[k].likeCount,
        commentCount: post[k].commentCount,
      }));
      setPostList(postData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Stack>
        {postList.map((item, index) => (
          <BoardListItemHot
            postId={item.postId}
            rank={item.rank}
            mbti={item.mbti}
            title={item.title}
            hit={item.hit}
            like={item.likeCount}
            comment={item.commentCount}
            firstItem={index === 0}
          />
        ))}
      </Stack>
    </div>
  );
}

export default BoardHot;