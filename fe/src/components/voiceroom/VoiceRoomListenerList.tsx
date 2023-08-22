import React from 'react';
import { Person } from 'redux/voiceroomSlice';
import { Grid, Stack, Badge, Avatar, Typography, Tooltip } from '@mui/material';
import { PeopleListContent } from 'styles/fontStyle';
import ButtonText from 'components/common/ButtonText';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface VoiceRoomListenerListProps {
  people: Person[];
  hide?: boolean;
}

function VoiceRoomListenerList({ people, hide }: VoiceRoomListenerListProps) {
  const user = useSelector((state: RootState) => state.user);
  const handleKickOut = (nickname: string) => {
    // 강제퇴장 로직을 여기에 작성
    alert(`${nickname}을(를) 강제퇴장했습니다.`);
  };

  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      {!hide &&
        <Grid item xs={2} sx={{ padding: 2 }}>
          <Stack spacing={1} alignItems="center">
            <Badge
              badgeContent=""
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '1.5rem', width: 'auto', height: 'auto'
                },
              }}
            >
              <Avatar src={user.profile} sx={{ width: 56, height: 56 }} />
            </Badge>
            <Tooltip
              title={
                <Stack alignItems="center">
                  <Typography style={{ ...PeopleListContent, color: '#fff' }} sx={{ paddingY: 1 }}>
                    {user.nickname}
                  </Typography>
                  {/* <ButtonText label="청취자로 전환" color="#9EB4FF" /> */}
                  <ButtonText label="강제 퇴장" color="#CAB8FF" />
                </Stack>
              }
            >
              <Typography
                style={{
                  ...PeopleListContent,
                  whiteSpace: 'nowrap', overflow: 'hidden',
                }}
              >{user.nickname}
              </Typography>
            </Tooltip>
          </Stack>
        </Grid>
      }
      {people.map((person, index) => (
        <Grid item xs={2} key={index} sx={{ padding: 2 }}>
          <Stack spacing={1} alignItems="center">
            <Badge
              badgeContent={person.status}
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '1.5rem', width: 'auto', height: 'auto'
                },
              }}
            >
              <Avatar src={person.profile} sx={{ width: 56, height: 56 }} />
            </Badge>
            <Tooltip
              title={
                <Stack alignItems="center">
                  <Typography style={{ ...PeopleListContent, color: '#fff' }} sx={{ paddingY: 1 }}>
                    {person.nickname}
                  </Typography>
                  <ButtonText label="강제 퇴장" color="#CAB8FF" />
                </Stack>
              }
            >
              <Typography
                style={{
                  ...PeopleListContent,
                  whiteSpace: 'nowrap', overflow: 'hidden',
                }}
              >{person.nickname}
              </Typography>
            </Tooltip>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default VoiceRoomListenerList;
