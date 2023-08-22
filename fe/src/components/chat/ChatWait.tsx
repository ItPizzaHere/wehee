import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from 'redux/selectedPageSlice';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Stack, Typography } from '@mui/material';
import svgLogo from '../../assets/logo.svg';
import ButtonBasic from 'components/common/ButtonBasic';
import { bold, regular } from 'styles/fontStyle'

function ChatWait() {
  const { handleLoveOnChatNavigate } = useCustomNavigate();

  const dispatch = useDispatch();

  const handleNavigate = () => {
    handleLoveOnChatNavigate();
    dispatch(setPage('Love On Chat'));
  }
  return (
    <div style={{ height: 'calc(100vh - 144px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={4} alignItems="center">
        <img src={svgLogo} style={{ width: 360, opacity: 0.3 }} />
        <Stack spacing={1.5} alignItems="center">
          <Typography style={{ ...bold, color: "#454545" }} sx={{ fontSize: "1.5rem" }}>참여중인 채팅</Typography>
          <Stack alignItems="center">
            <Typography style={{ ...regular, color: "#454545" }} sx={{ fontSize: "1.15rem" }}>Love On Chat에서</Typography>
            <Typography gutterBottom style={{ ...regular, color: "#454545" }} sx={{ fontSize: "1.15rem" }}>연애 고민 해결해보세요!</Typography>
          </Stack>
          <ButtonBasic label="바로가기" variant="contained" onClick={handleNavigate} size="large" />
        </Stack>
      </Stack>
    </div>
  );
}

export default ChatWait;