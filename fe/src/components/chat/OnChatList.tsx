import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOnChatList } from 'redux/onChatSlice';
import { setCurrentPage, setTotalPages } from 'redux/paginationSlice'; // 경로에 따라서 수정해야 함
import usePagination from 'hooks/usePagination'; // 경로에 따라서 수정해야 함
import { Grid, Pagination, Container } from '@mui/material';
import OnChatListItem from 'components/chat/OnChatListItem';

function OnChatList() {
  const chatList = useSelector(selectOnChatList);
  const dispatch = useDispatch();
  const itemsPerPage = 10;

  const { itemsToDisplay, totalPageCount, handlePageChange } = usePagination(chatList, itemsPerPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    const totalPageCount = Math.ceil(chatList.length / itemsPerPage);
    dispatch(setTotalPages(totalPageCount));
  }, [dispatch, chatList]);

  return (
    <div>
      <Grid container spacing={2}>
        {itemsToDisplay.map((item, index) => (
          <Grid key={index} item xs={12} md={6}>
            <OnChatListItem
              category={item.category}
              title={item.title}
              owner={{ profile: item.profile, nickname: item.nickname}}
              personnel={item.joined}
              limit={item.limit}
              chatId={item.id}
            />
          </Grid>
        ))}
      </Grid>
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

export default OnChatList;