import React from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Box, Stack, Typography } from '@mui/material';
import ButtonRound from 'components/common/ButtonRound';
import { FallbackTitle } from 'styles/fontStyle';

function VoiceRoomEnd() {
  const { handleMainNavigate, handleVoiceRoomNavigate } = useCustomNavigate();

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Box
          height="60%" width="75%"
          display="flex" flexDirection="column" justifyContent="center" alignItems="center"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.94);',
            padding: '48px 36px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 5px rgba(144, 144, 144, 0.25)',
          }}
        >
          <Stack spacing={4}>
            <Typography style={FallbackTitle} > 보이스룸이 종료되었습니다 </Typography>
            <Box display="flex" justifyContent="center">
            <Stack direction="row"spacing={4}>
              <ButtonRound
                label='메인으로'
                color='primary'
                onClick={handleMainNavigate}
              />
              <ButtonRound
                label='목록으로'
                color='primary'
                onClick={handleVoiceRoomNavigate}
              />
            </Stack>
            </Box>
          </Stack>
        </Box>
      </Box >
    </div >
  );
}

export default VoiceRoomEnd;