import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setTotalPages } from 'redux/paginationSlice';
import usePagination from '../../hooks/usePagination';
import { Stack, Pagination, Container } from '@mui/material';
import BoardListItemPreview from 'components/board/BoardListItemPreview';
import { listScrap } from 'services/loungeService';

interface BoardItem {
  postId: number;
  title: string;
  content: string;
  userId: number;
  uploadTime: string;
  nickname: string;
  hit: number;
  likeCount: number;
  commentCount: number;
}

function BoardMyScrap() {
  let post: Array<BoardItem>;

  const data=listScrap();
  const [boardList, setBoardList] = useState(data);
  const [postList, setPostList] = useState<BoardItem[]>([]);

  const dispatch = useDispatch();
  const itemsPerPage = 10;

  const { itemsToDisplay, totalPageCount, handlePageChange } = usePagination(postList, itemsPerPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
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
      title: post[k].title,
      userId: post[k].userId,
      hit: post[k].hit,
      likeCount: post[k].likeCount,
      commentCount: post[k].commentCount,
      uploadTime: post[k].uploadTime,
      content: post[k].content,
      nickname: post[k].nickname,
    }));

    setPostList(postData);
    const postDataLength = postData === null ? 0 : postData.length;
    const totalPageCount = Math.ceil(postDataLength / itemsPerPage);
    dispatch(setTotalPages(totalPageCount));
  };
  fetchData();
}, [dispatch]);

return (
    <div>
      <Stack>
        {itemsToDisplay.map((item, index) => (
          <BoardListItemPreview
            postId={item.postId}
            title={item.title}
            preview={item.content}
            time={item.uploadTime}
            hit={item.hit}
            like={item.likeCount}
            comment={item.commentCount}
            firstItem={index === 0}
          />
        ))}
      </Stack>
      <Container sx={{ display: 'flex', justifyContent: 'center', paddingY: 4 }}>
        <Pagination
          count={totalPageCount}
          color="primary"
          onChange={handlePageChange}
        />
      </Container>
    </div>
  );
}

export default BoardMyScrap;