import React from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Stack, Chip, Typography, IconButton } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { RoomTitle, ChatListContent } from 'styles/fontStyle'

interface ChatHeaderProps {
  category: string;
  title: string;
  personnel: number;
  limit: number;
}

function ChatHeader({ category, title, personnel, limit }: ChatHeaderProps) {
  const { handleChatInfoNavigate } = useCustomNavigate();
  return (
    <Stack direction="row" spacing="auto" alignItems="center" sx={{ paddingY: 1.5 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Chip
          label={category} size="small"
          sx={{
            paddingX: 0.5,
            fontFamily: "pretendard-Regular",
            color: "#fff", backgroundColor: "#757575"
          }}
        />
        <Typography style={RoomTitle}>{title}</Typography>
        <Typography style={ChatListContent}>{personnel}/{limit}</Typography>
      </Stack>
      <IconButton onClick={handleChatInfoNavigate}>
        <InfoOutlined style={{ fontSize: '1.75rem' }} />
      </IconButton>
    </Stack>
  );
}

export default ChatHeader;