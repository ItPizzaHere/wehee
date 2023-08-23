import React, { useState } from 'react';
import { Person } from 'redux/chatSlice';
import { Stack, Avatar, Typography, IconButton, Tooltip } from '@mui/material';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { PeopleListContent } from 'styles/fontStyle';
import ButtonText from 'components/common/ButtonText';

interface ChatPeopleListProps {
  people: Person[];
}

function ChatPeopleList({ people }: ChatPeopleListProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const itemsToShow = 5;

  const totalPages = Math.ceil(people.length / itemsToShow);

  const handleLeftClick = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const handleRightClick = () => {
    if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
  };

  const handleKickOut = (nickname: string) => {
    // 강제퇴장 로직을 여기에 작성
    alert(`${nickname}을(를) 강제퇴장했습니다.`);
  };

  return (
    <Stack direction="row" spacing="auto">
      {totalPages > 1 && (
        <IconButton onClick={handleLeftClick} disabled={pageIndex === 0}>
          <ArrowBackIosRounded />
        </IconButton>
      )}
      <Stack direction="row" spacing={6}>
        {people.slice(pageIndex * itemsToShow, (pageIndex + 1) * itemsToShow).map((person, index) => (
          <Stack key={index} spacing={1} alignItems="center">
            <Avatar src={person.profile} sx={{ width: 40 , height: 40 }} />
            <Tooltip
              title={
                <Stack alignItems="center">
                  <Typography style={{...PeopleListContent, color: '#fff'}} sx={{ paddingY: 1 }}>
                    {person.nickname}
                  </Typography>
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
      {totalPages > 1 && (
        <IconButton onClick={handleRightClick} disabled={pageIndex === totalPages - 1}>
          <ArrowForwardIosRounded />
        </IconButton>
      )}
    </Stack>
  );
}

export default ChatPeopleList;
