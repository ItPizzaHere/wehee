import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setTotalPages } from 'redux/paginationSlice';
import usePagination from '../../hooks/usePagination';
import { Stack, Pagination, Container } from '@mui/material';
import BoardListItem from 'components/board/BoardListItem';
import { listPost } from 'services/loungeService';
// import { NumberLiteralType } from 'typescript';

interface BoardItem {
  postId: number;
  title: string;
  hit: number;
  likeCount: number;
  commentCount: number;
}

function BoardHome() {
  let mbti: string;
  let message: string;
  let post: Array<BoardItem>;
  let state: number;
  let totalCount: number;

  const data=listPost();

  const [boardList, setBoardList] = useState(data);

  const [postList, setPostList] = useState<BoardItem[]>([]);
  const dispatch = useDispatch();
  const itemsPerPage = 20;

  const { itemsToDisplay, totalPageCount, handlePageChange } = usePagination(postList, itemsPerPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    
      const fetchData=async() => {
        setBoardList(data);
        await boardList.then((promiseResult) => {
          mbti=promiseResult.mbti;
          message=promiseResult.message;
          post=promiseResult.post;
          state=promiseResult.state;
          totalCount=promiseResult.totalCount;
        }).catch((error) => {
          console.error("Promise에서 오류 발생", error);
        });

        const postData = Array.from({ length: totalCount }, (v, k) => ({
          postId: post[k].postId,
          title: post[k].title,
          hit: post[k].hit,
          likeCount: post[k].likeCount,
          commentCount: post[k].commentCount,
        }));

    setPostList(postData);
    const totalPageCount = Math.ceil(postData.length / itemsPerPage);
    dispatch(setTotalPages(totalPageCount));
  };
  fetchData();

}, [dispatch]);



  return (
    <div>
      <Stack>
        {itemsToDisplay.map((item, index) => (
          <BoardListItem
            postId={item.postId}
            title={item.title}
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

export default BoardHome;
