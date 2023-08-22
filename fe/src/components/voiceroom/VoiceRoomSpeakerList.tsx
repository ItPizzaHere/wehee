import React, { useState } from 'react';
import { Person } from 'redux/voiceroomSlice';
import { Stack, Avatar, Typography, Badge, Tooltip } from '@mui/material';
import { PeopleListContent } from 'styles/fontStyle';
import ButtonText from 'components/common/ButtonText';

interface VoiceRoomSpeakerListProps {
  people: Person[];
}

function VoiceRoomSpeakerList({ people }: VoiceRoomSpeakerListProps) {
  const handleKickOut = (nickname: string) => {
    // 강제퇴장 로직을 여기에 작성
    alert(`${nickname}을(를) 강제퇴장했습니다.`);
  };

  return (
    <Stack direction="row" spacing="auto">
      {people.map((person, index) => (
        <Stack key={index} spacing={1} alignItems="center">
          <Badge
            badgeContent={person.status}
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '1.5rem',  width: 'auto', height: 'auto'
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
                <ButtonText label="청취자로 전환" color="#9EB4FF" />
                <ButtonText label="강제 퇴장" color="#CAB8FF" />
              </Stack>
            }>
            <Typography
              style={{
                ...PeopleListContent,
                whiteSpace: 'nowrap', overflow: 'hidden',
              }}
            >{person.nickname}
            </Typography>
          </Tooltip>
        </Stack>
      ))}

    </Stack>
  );
}

export default VoiceRoomSpeakerList;
