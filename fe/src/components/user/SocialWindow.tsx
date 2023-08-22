import React from 'react';
import useSocialLogin from '../../hooks/useSocialLogin';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import useCustomHover from '../../hooks/useCustomHover';
import { Stack, ListItem, Box, Typography } from '@mui/material';
import { socialWindowTitle, socialWindowSubTitle } from 'styles/fontStyle';
import logo from 'assets/favicon.svg';
import kakao from 'assets/kakao_login.svg';
import naver from 'assets/naver_login.svg';
import google from 'assets/google_login.svg';

interface SocialWindowProps {
  title: string;
  subtitle: string;
  hide?: boolean;
}

function SocialWindow({ title, subtitle, hide }: SocialWindowProps) {
  const { handleLogin } = useSocialLogin();

  const { handleJoinNavigate } = useCustomNavigate();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useCustomHover();

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.94);',
        padding: '48px 36px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 5px rgba(144, 144, 144, 0.25)',
      }}
    >
      <Stack spacing={3}>
        <ListItem>
          <Box width='330px' display="flex" justifyContent="center" alignItems="center">
            <Stack alignItems="center" spacing={0.5}>
              <img src={logo} alt="Logo" style={{ height: '48px' }} />
              <Typography style={socialWindowTitle}>{title}</Typography>
              <Typography style={socialWindowSubTitle}>{subtitle}</Typography>
            </Stack>
          </Box>
        </ListItem>
        <ListItem>
          <Stack spacing={2}>
            <img
              src={kakao} alt="카카오 로그인"
              style={{ width: '330px', cursor: 'pointer' }}
              onClick={() => handleLogin('kakao')}
            />
            <img
              src={naver} alt="네이버 로그인"
              style={{ width: '330px', cursor: 'pointer' }}
              onClick={() => handleLogin('naver')}
            />
            <img
              src={google} alt="구글 로그인"
              style={{ width: '330px', cursor: 'pointer' }}
              onClick={() => handleLogin('google')}
            />
            <Box width='330px' display="flex" justifyContent="center" alignItems="center">
              {!hide &&
                <div style={{ display: 'flex' }}>
                  <Typography color='#606060'>처음 오셨나요?&nbsp;</Typography>
                  <Typography
                    color='#716FDC'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ textDecoration: isHovered ? 'underline' : 'none' }}
                    onClick={handleJoinNavigate}
                  >
                    지금 가입하세요!
                  </Typography>
                </div>
              }
            </Box>
          </Stack>
        </ListItem>
      </Stack>
    </Box>
  );
}

export default SocialWindow;