import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Chip, Typography } from '@mui/material';
import { Person } from '@mui/icons-material';
import { CardTitle, BoardViewInfo, ChatListContent, ChatListInfo } from 'styles/fontStyle';

interface ChatListItemProps {
  category: string;
  personnel: number;
  limit: number;
  title: string;
  message: string;
  time: string;
  chatId: string;
}

function ChatListItem({ category, personnel, limit, title, message, time, chatId }: ChatListItemProps) {
  return (
    <Link to={`/chat/${chatId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(202, 184, 255, 0.10)'
          },
        }}
      >
        <Stack spacing={2} sx={{ paddingX: 2, paddingY: 3 }}>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={4} alignItems="center">
              <Chip
                label={category} size="small"
                sx={{
                  paddingX: 0.5,
                  fontFamily: "pretendard-Regular",
                  color: "#fff", backgroundColor: "#757575"
                }}
              />
              <Stack direction="row" spacing={1} alignItems="center">
                <Person style={{ color: "#606060" }} sx={{ width: 24, height: 24 }} />
                <Typography style={BoardViewInfo} fontSize="1rem">{personnel}/{limit}<div id="MBTI"></div></Typography>
              </Stack>
            </Stack>
            <Typography style={ChatListInfo}>{time}</Typography>
          </Stack>
          <Stack spacing={1} sx={{ paddingX: 0.5 }}>
            <Typography style={CardTitle}>{title}</Typography>
            <Typography style={ChatListContent}>{message}</Typography>
          </Stack>
        </Stack>
      </Box >
    </Link>
  );
}

export default ChatListItem;