import React from 'react';
import useCustomNavigate from 'hooks/useCustomNavigate';
import { Box, Stack, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { black } from 'styles/fontStyle'
import HeaderBeforeLogin from 'components/layout/HeaderBeforeLogin';
import ButtonRound from 'components/common/ButtonRound';
import svgMain from 'assets/main.svg';

function Main() {
  const MainStyle = {
    backgroundColor: '#A498ED',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const isScreenOf740Less = useMediaQuery('(max-width: 740px)');

  const { handleJoinNavigate } = useCustomNavigate();

  return (
    <div style={MainStyle}>
      <HeaderBeforeLogin />
      <Stack direction="row" spacing={6} alignItems="flex-start">
        <Box textAlign="right">
          <Box marginBottom={4}>
            <Typography variant="h1" color="white" style={black}>We;Hee</Typography>
            <Typography variant="h3" color="white">상대의 마음을 알 수 있는</Typography>
            <Typography variant="h3" color="white">가장 아늑한 공간</Typography>
          </Box>
          <ButtonRound label='가입하고 시작' color='info' fontColor='#968AE1' onClick={handleJoinNavigate} />
        </Box>
        {isScreenOf740Less ? null : <img src={svgMain} alt="favicon" height="240px" />}
      </Stack>
    </div>
  );
}

export default Main;
