import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import LayoutAfterLoginHideFooter from 'components/layout/LayoutAfterLoginHideFooter';
import ChatList from 'components/chat/ChatList';
import ChatRoom from 'components/chat/ChatRoom';
import ChatWait from 'components/chat/ChatWait';
import ChatInfo from 'components/chat/ChatInfo';

function Chat() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <div>
      <LayoutAfterLoginHideFooter>
        <Box maxWidth="xl">
          <Routes>
            <Route path="/" element={isMdScreen ? (
              <Stack direction="row">
                <Box width="40%">
                  <ChatList />
                </Box>
                <Box width="60%">
                  <ChatWait />
                </Box>
              </Stack>
            ) : (
              <ChatList />
            )} />
            <Route path="/:chatId" element={isMdScreen ? (
              <Stack direction="row">
                <Box width="40%">
                  <ChatList />
                </Box>
                <Box width="60%">
                  <ChatRoom />
                </Box>
              </Stack>
            ) : (
              <ChatRoom />
            )} />
            <Route path="/view/info" element={isMdScreen ? (
              <Stack direction="row">
                <Box width="40%">
                  <ChatList />
                </Box>
                <Box width="60%">
                  <ChatInfo />
                </Box>
              </Stack>
            ) : (
              <ChatInfo />
            )} />
          </Routes>
        </Box>
      </LayoutAfterLoginHideFooter>
    </div >
  );
}

export default Chat;
