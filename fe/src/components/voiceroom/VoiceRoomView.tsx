import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Stack, Box, Container, Typography, Divider } from '@mui/material';
import { MicRounded, CloseRounded, Check, HeadsetRounded, SettingsVoice } from '@mui/icons-material';
import VoiceRoomSpeakerList from 'components/voiceroom/VoiceRoomSpeakerList';
import VoiceRoomListenerList from './VoiceRoomListenerList';
import ModalUpdateVoiceRoom from './ModalUpdateVoiceRoom';
import { RoomTitle, ChatListContent, RoomContentTitle } from 'styles/fontStyle';
import { scrollStyle } from 'styles/scroll';
import ModalRequest from './ModalRequest';

const samplePersons = [
  { profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVekg-NaMhcWiwngZgWkwX0fIU1cqdL8F4bw&usqp=CAU', nickname: '이히히히힛 #ESTP', status: '' },

];

function VoiceRoomView() {
  const sampleListeners = [
    { profile: '', nickname: '사용자1', status: '😊' },
    { profile: '', nickname: '사용자2', status: '' },
    { profile: '', nickname: '사용자3', status: '' },
    { profile: '', nickname: '사용자4', status: '💜' },
    { profile: '', nickname: '사용자5', status: '' },
  ];

  const voiceRoom = useSelector((state: RootState) => state.voiceroom);
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
            <Typography style={RoomTitle}>ISTJ랑 짝사랑부터 연애까지 썰 푼다</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography style={{ fontSize: '1.15rem', color: '#716FDC' }}>현재 7명 참여중</Typography>
              <Typography style={{ fontSize: '1.15rem', color: '#716FDC' }}>|</Typography>
              <Typography style={ChatListContent}>07:42에 시작</Typography>
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
            <Typography style={{ fontSize: '1.15rem', color: '#FF4545' }}>나가기</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={1} alignItems="center">
              <MicRounded style={{ fontSize: '1.5rem', color: '#303030', }} />
              <Typography style={RoomContentTitle}>발표자</Typography>
            </Stack>
            {/* <Stack direction="row" spacing={1} alignItems="center"
              sx={{
                paddingX: 2, paddingY: 1.5, borderRadius: 100,
                cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(96, 96, 96, 0.1)' }
              }}
              onClick={handleOpenReqModal}
            >
              <AddTaskRounded style={{ fontSize: '1.5rem', color: '#606060' }} />
              <Typography style={{ fontSize: '1.15rem', color: '#606060' }}>요청 보기</Typography>
            </Stack> */}
          </Stack>
          <Container>
            <VoiceRoomSpeakerList people={samplePersons} />
          </Container>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <HeadsetRounded style={{ fontSize: '1.5rem', color: '#303030', }} />
            <Typography style={RoomContentTitle}>청취자</Typography>
          </Stack>
          <Container sx={{ ...scrollStyle, height: "480px", overflowY: "auto" }}>
            <VoiceRoomListenerList people={sampleListeners} />
          </Container>
        </Stack>
        <Stack direction="row" spacing="auto">
          {/* <Stack spacing={1} alignItems="center">
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
          </Stack> */}
          <Stack spacing={1} alignItems="center">
            <Box
              width={72} height={72}
              sx={{
                border: "1px solid #D3DCE9", borderRadius: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              onClick={handleMuteToggle}
            >
              {mute ?
                <SettingsVoice style={{ color: "#716FDC" }} sx={{ width: 48, height: 48 }} />
                : <Check style={{ color: "#446AF0" }} sx={{ width: 48, height: 48 }} />
              }
            </Box>
            <Typography style={ChatListContent}>{mute ? "요청하기" : "요청보냄"}</Typography>
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

export default VoiceRoomView;