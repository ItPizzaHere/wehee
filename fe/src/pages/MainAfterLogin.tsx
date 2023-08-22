import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedMenu } from 'redux/boardMenuSlice';
import { setPage } from 'redux/selectedPageSlice';
import useCustomNavigate from 'hooks/useCustomNavigate';
import useCustomHover from 'hooks/useCustomHover';
import { Container, Stack, Grid, Hidden, Card, CardMedia, Typography } from '@mui/material';
import { LocalFireDepartment } from '@mui/icons-material'
import { styled } from '@mui/system'
import { backgroundStyle, svgWStyle, svgHStyle } from 'styles/userStyle';
import LayoutAfterLoginHideFooter from 'components/layout/LayoutAfterLoginHideFooter';
import BoardHotMain from 'components/board/BoardHotMain';
import ucc from '../assets/weheeucc.gif';
import mainIMG from '../assets/mainimg.jpg';
import svgW from '../assets/w.svg';
import svgH from '../assets/h.svg';

const StyledCard = styled(Card)({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  transition: 'all 0.3s ease',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
});


function MainAfterLogin() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useCustomHover();
  const { handleBoardHotNavigate, handleLoveOnChatNavigate, handleVoiceRoomNavigate } = useCustomNavigate();

  const dispatch = useDispatch();
  
  const moveHot = () => {
    dispatch(setSelectedMenu('hot'));
    handleBoardHotNavigate();
  }

  const moveOnChat = () => {
    dispatch(setPage('Love On Chat'));
    handleLoveOnChatNavigate();
  }

  const moveVoiceRoom = () => {
    dispatch(setPage('보이스룸'));
    handleVoiceRoomNavigate();
  }

  return (
    <div>
      <LayoutAfterLoginHideFooter>
        <Container maxWidth="lg" sx={{ paddingTop: 6 }}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Card sx={{ padding: 2, backgroundColor: "rgba(255, 255, 255, 0.94)" }}>
                <CardMedia
                  image={mainIMG}
                  sx={{ height: 280, borderRadius: 1 }}
                />
                <Stack spacing={2} sx={{ paddingTop: 3 }}>
                  <Stack direction="row" spacing="auto" alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocalFireDepartment sx={{ color: "#716FDC", fontSize: "1.5rem" }} />
                      <Typography sx={{ fontSize: "1.3rem" }}>HOT 게시글</Typography>
                    </Stack>
                    <Typography
                      color='#716FDC'
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ textDecoration: isHovered ? 'underline' : 'none', cursor: "pointer" }}
                      onClick={moveHot}
                    >
                      + 더 보기
                    </Typography>
                  </Stack>
                  <BoardHotMain />
                </Stack>
              </Card>
            </Grid>
            <Hidden mdDown>
              <Grid item md={5}>
                <Card sx={{ marginX: 4, marginBottom: 2.5 }}>
                  <img src={ucc}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Card>
                <StyledCard sx={{ marginX: 4, marginY: 2, padding: 2.5 }} onClick={moveOnChat}>
                  <Stack spacing={1}>
                    <Typography sx={{ color: '#606060', fontSize: '1.15rem' }}> 상대를 가장 잘 예측할 수 있는 사람과 <br/> 은밀한 연애 상담을 원한다면? </Typography>
                    <Typography sx={{ color: "#716FDC", fontSize: "1.3rem" }}>LOVE ON CHAT으로 가기 →</Typography>
                  </Stack>
                </StyledCard>
                <StyledCard sx={{ marginX: 4, padding: 2.5 }} onClick={moveVoiceRoom}>
                  <Stack spacing={1}>
                    <Typography sx={{ color: '#606060', fontSize: '1.15rem' }}>  관심있는 주제의 이야기를 <br/> 다양한 사람들과 함께하고 싶다면? </Typography>
                    <Typography sx={{ color: "#716FDC", fontSize: "1.3rem" }}>보이스룸으로 가기 →</Typography>
                  </Stack>
                </StyledCard>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </LayoutAfterLoginHideFooter >
      <Container>
        <div style={backgroundStyle}>
          <img src={svgW} alt="back w" width='320px' height='320px' style={svgWStyle} />
          <img src={svgH} alt="back h" width='320px' height='320px' style={{ ...svgHStyle, paddingTop: 16 }} />
        </div>
      </Container>
    </div >
  );
}

export default MainAfterLogin;
