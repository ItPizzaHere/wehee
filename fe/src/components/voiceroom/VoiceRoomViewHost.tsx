import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Stack, Box, Container, Typography, Divider } from '@mui/material';
import { MicRounded, CloseRounded, AddTaskRounded, HeadsetRounded, Edit, MicOffRounded } from '@mui/icons-material';
import VoiceRoomSpeakerList from 'components/voiceroom/VoiceRoomSpeakerList';
import VoiceRoomListenerList from './VoiceRoomListenerList';
import ModalUpdateVoiceRoom from './ModalUpdateVoiceRoom';
import { RoomTitle, ChatListContent, RoomContentTitle } from 'styles/fontStyle';
import { scrollStyle } from 'styles/scroll';
import ModalRequest from './ModalRequest';

function VoiceRoomViewHost() {
  const user = useSelector((state: RootState) => state.user);
  const voiceroom = useSelector((state: RootState) => state.voiceroom)

  const sampleListeners = [
    { profile: '', nickname: '청취자1 #INFP', status: '' },
    { profile: '', nickname: '박사님 #ISTJ', status: '' },
    { profile: '', nickname: '포카칩햇감자 #ESTP', status: '' },
    { profile: '', nickname: '닉네임임 #INTP', status: '' },
    { profile: '', nickname: '왜지감자 #ISTP', status: '' },
    { profile: '', nickname: '엥뿌삐 #ENFP', status: '' },
    { profile: '', nickname: '전좋아요 #ESFP', status: '' },
    { profile: '', nickname: '지나가는나그네 #ISFP', status: '' },
    { profile: '', nickname: '킹 #ENFP', status: '' },
  ];

  const { handleVoiceRoomEndNavigate } = useCustomNavigate();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReqModalOpen, setIsReqModalOpen] = useState(false);
  const [mute, setMute] = useState(true);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  
  const handleOpenReqModal = () => {
    setIsReqModalOpen(true);
  };

  const handleCloseReqModal = () => {
    setIsReqModalOpen(false);
  };

  const handleMuteToggle = () => {
    setMute(!mute);
  };

  const handleEndVocieroom = () => {
    handleVoiceRoomEndNavigate();
  }

  return (
    <div>
      <Stack spacing={4} sx={{ paddingTop: 4, paddingBottom: 10 }}>
        <Stack direction="row" spacing="auto" alignItems="center" sx={{ paddingY: 1.5 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography style={RoomTitle}>{voiceroom.title}</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography style={{ fontSize: '1.15rem', color: '#716FDC' }}>현재 2명 참여중</Typography>
              <Typography style={{ fontSize: '1.15rem', color: '#716FDC' }}>|</Typography>
              <Typography style={ChatListContent}>{voiceroom.startTime}에 시작</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row" spacing={1} alignItems="center"
            sx={{
              paddingX: 2, paddingY: 1.5, borderRadius: 100,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255, 69, 69, 0.1)'
              }
            }}
            onClick={handleEndVocieroom}
          >
            <CloseRounded style={{ fontSize: '1.5rem', color: '#FF4545' }} />
            <Typography style={{ fontSize: '1.15rem', color: '#FF4545' }}>종료</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={1} alignItems="center">
              <MicRounded style={{ fontSize: '1.5rem', color: '#303030', }} />
              <Typography style={RoomContentTitle}>발표자</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center"
              sx={{
                paddingX: 2, paddingY: 1.5, borderRadius: 100,
                cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(96, 96, 96, 0.1)' }
              }}
              onClick={handleOpenReqModal}
            >
              <AddTaskRounded style={{ fontSize: '1.5rem', color: '#606060' }} />
              <Typography style={{ fontSize: '1.15rem', color: '#606060' }}>요청 보기</Typography>
            </Stack>
          </Stack>
          <Container>
            <VoiceRoomSpeakerList people={[{ profile: user.profile, nickname: user.nickname, status: '' }]} />
          </Container>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <HeadsetRounded style={{ fontSize: '1.5rem', color: '#303030', }} />
            <Typography style={RoomContentTitle}>청취자</Typography>
          </Stack>
          <Container sx={{ ...scrollStyle, height: "480px", overflowY: "auto" }}>
            <VoiceRoomListenerList people={sampleListeners} hide={true} />
          </Container>
        </Stack>
        <Stack direction="row" spacing="auto">
          <Stack spacing={1} alignItems="center">
            <Box
              width={72} height={72}
              sx={{
                border: "1px solid #D3DCE9", borderRadius: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              onClick={handleOpenEditModal}
            >
              <Edit style={{ color: "#606060" }} sx={{ width: 48, height: 48 }} />
            </Box>
            <Typography style={ChatListContent}>정보 수정</Typography>
          </Stack>
          <Stack spacing={1} alignItems="center">
            <Box
              width={72} height={72}
              sx={{
                border: "1px solid #D3DCE9", borderRadius: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              onClick={handleMuteToggle}
            >
              <MicOffRounded style={{ color: mute ? "#606060" : "#716FDC" }} sx={{ width: 48, height: 48 }} />
            </Box>
            <Typography style={ChatListContent}>{mute ? "마이크없음" : "음소거 해제"}</Typography>
          </Stack>
          <Stack
            direction="row" alignItems="center" spacing={4}
            sx={{
              border: "1px solid #D3DCE9", borderRadius: 5,
              paddingX: 4,
            }}
          >
            <Typography style={{ fontSize: "2.5rem" }}>👋</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>😊</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>😭</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>😠</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>⭕</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>❌</Typography>
            <Divider orientation="vertical" sx={{ borderColor: "#D3DCE9" }} />
            <Typography style={{ fontSize: "2.5rem" }}>💜</Typography>
          </Stack>
        </Stack>
      </Stack>
      <ModalUpdateVoiceRoom
        isModalOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        modalTitle="보이스룸 정보 수정하기"
      />
      <ModalRequest
        isModalOpen={isReqModalOpen}
        onClose={handleCloseReqModal}
        modalTitle="발표 요청 보기 "
      />
    </div>
  );
}

export default VoiceRoomViewHost;