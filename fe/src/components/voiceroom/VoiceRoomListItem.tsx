import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Card, CardContent, Typography, Avatar } from '@mui/material';
import { Person } from 'redux/voiceroomSlice';
import { CardTitle, BoardViewInfo } from 'styles/fontStyle';

interface VoiceRoomListItemProps {
  title: string;
  owner: Person;
  personnel: number;
  startTime: string;
}

function VoiceRoomListItem({ title, owner, personnel, startTime }: VoiceRoomListItemProps) {
  return (
    <Link to={`/voiceroom/view`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card variant="outlined"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(136, 162, 255, 0.05)'
          }
        }}
      >
        <CardContent>
          <Stack spacing={1.5} sx={{ paddingTop: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography style={{ color: '#716FDC' }} fontSize="1rem">현재 {personnel}명 참여중</Typography>
              <Typography style={{ color: '#716FDC' }} fontSize="1rem">|</Typography>
              <Typography style={BoardViewInfo} fontSize="1rem">{startTime}에 시작</Typography>
            </Stack>
            <Typography style={CardTitle} sx={{ paddingX: 0.5 }}>{title}</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="profile" src={owner.profile} sx={{ width: 24, height: 24 }} />
              <Typography style={BoardViewInfo} fontSize="1rem">{owner.nickname}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VoiceRoomListItem;