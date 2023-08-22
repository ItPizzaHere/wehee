import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Card, CardContent, Chip, Typography, Avatar } from '@mui/material';
import { PersonRounded } from '@mui/icons-material';
import { Person } from 'redux/chatSlice'
import { CardTitle, BoardViewInfo } from 'styles/fontStyle';

interface OnChatListItemProps {
  category: string;
  title: string;
  owner: Person;
  personnel: number;
  limit: number;
  chatId: number;
}

function OnChatListItem({ category, title, owner, personnel, limit, chatId }: OnChatListItemProps) {
  return (
    <Link to={`/chat/${chatId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card variant="outlined"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(136, 162, 255, 0.05)'
          }
        }}
      >
        <CardContent>
          <Chip
            label={category} size="small"
            sx={{
              paddingX: 0.5,
              fontFamily: "pretendard-Regular",
              color: "#fff", backgroundColor: "#757575"
            }}
          />
          <Typography style={CardTitle} sx={{ paddingX: 0.5, paddingY: 1.5 }}>{title}</Typography>
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="profile" src={owner.profile} sx={{ width: 24, height: 24 }} />
              <Typography style={BoardViewInfo} fontSize="1rem">{owner.nickname}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PersonRounded style={{ color: "#606060" }} sx={{ width: 24, height: 24 }} />
              <Typography style={BoardViewInfo} fontSize="1rem">{personnel}/{limit}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}

export default OnChatListItem;