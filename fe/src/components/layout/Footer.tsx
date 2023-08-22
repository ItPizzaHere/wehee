import React from 'react';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { regular } from 'styles/fontStyle';

const toolbarStyle = {
  justifyContent: 'center',
};

function Footer() {
  return (
    <div>
      <AppBar position="static" sx={{ bottom: 0, backgroundColor: '#f9fafb', boxShadow: 'none' }}>
        <Toolbar style={toolbarStyle}>
          <Stack alignItems="center">
            <Typography variant="body1" color="#909090">
              © {new Date().getFullYear()} We;Hee (위히)
            </Typography>
            <Typography variant="body2" color="#909090" style={regular}>
              MBTI로 연결되는 공간, 상대의 마음을 알 수 있는 가장 아늑한 공간
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;