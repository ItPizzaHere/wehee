import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import useCustomNavigate from '../hooks/useCustomNavigate';
import LayoutBeforeLogin from 'components/layout/LayoutBeforeLoginHide';
import { FallbackTitle } from 'styles/fontStyle';
import { backgroundStyle, svgWStyle, svgHStyle } from 'styles/userStyle';
import svgW from '../assets/w.svg';
import svgH from '../assets/h.svg';
import ButtonRound from 'components/common/ButtonRound';

function Fallback() {
  const { handleMainNavigate } = useCustomNavigate();

  return (
    <div>
      <LayoutBeforeLogin>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
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
              <Typography style={FallbackTitle} > 접근이 불가능한 페이지입니다 </Typography>
              <Box display="flex" justifyContent="center">
                <ButtonRound
                  label='메인으로 돌아가기'
                  color='primary'
                  onClick={handleMainNavigate}
                />
              </Box>
            </Stack>
          </Box>
        </Box >
      </LayoutBeforeLogin >
      <div style={backgroundStyle}>
        <img src={svgW} alt="back w" width='320px' height='320px' style={svgWStyle} />
        <img src={svgH} alt="back h" width='320px' height='320px' style={svgHStyle} />
      </div>
    </div >
  );
};

export default Fallback;