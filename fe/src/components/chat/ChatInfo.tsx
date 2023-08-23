import React, { useState } from 'react';
import { initialState, MBTIChipData } from 'redux/mbtiSlice';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Container, Stack, Box, Chip, Typography, IconButton, Divider } from '@mui/material';
import { ArrowBack, Create, WindPower } from '@mui/icons-material';
import ButtonText from 'components/common/ButtonText';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import ChatPeopleList from 'components/chat/ChatPeopleList';
import MBTIChip from 'components/common/MBTIChip';
import { RoomTitle, RoomSubTitle, RoomSubTitleBold, ChatListContent } from 'styles/fontStyle'
import ModalEditChat from 'components/chat/ModalEditChat';

const samplePersons = [
  { profile: '', nickname: '사용자1' },
  { profile: '', nickname: '사용자2' },
  { profile: '', nickname: '사용자3' },
  { profile: '', nickname: '사용자4' },
  { profile: '', nickname: '사용자5' },
  { profile: '', nickname: '사용자6' },
  { profile: '', nickname: '사용자7' },
  { profile: '', nickname: '사용자8' },
  { profile: '', nickname: '사용자9' },
  // { profile: '', nickname: '사용자10' },
];
function ChatInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleChatViewNavigate } = useCustomNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getColorForMBTI = (mbtiLabel: string) => {
    const mbtiItem = initialState.chipData.find((chip: MBTIChipData) => chip.label === mbtiLabel);
    return mbtiItem ? mbtiItem.color : "#303030";
  }

  const handleChatEnd = () => {
    if (window.confirm("정말 채팅을 종료하시겠습니까?")) {
      // 채팅 종료 로직
    }
  }

  return (
    <div style={{ height: 'calc(100vh - 144px)', display: 'flex', flexDirection: 'column' }}>
      <Container style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingY: 1.5 }}>
          <IconButton onClick={handleChatViewNavigate}>
            <ArrowBack style={{ fontSize: '1.75rem', color: '#716FDC' }} />
          </IconButton>
          <Typography style={RoomTitle}>채팅 정보</Typography>
        </Stack>
        <Stack spacing={4} sx={{ padding: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing="auto" alignItems="center">
              <Typography style={RoomTitle}>Chat Title</Typography>
              <ButtonHasIcon
                icon={<Create />}
                label="수정하기"
                variant="outlined"
                color="primary"
                onClick={handleOpenModal}
              />
            </Stack>
            <Stack spacing={3} sx={{ padding: 2 }}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography style={RoomSubTitle}>카테고리</Typography>
                <Chip
                  label="카테고리" size="small"
                  sx={{
                    paddingX: 0.5,
                    fontFamily: "pretendard-Regular",
                    color: "#fff", backgroundColor: "#757575"
                  }}
                />
              </Stack>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography style={RoomSubTitle}>제한인원</Typography>
                <Typography style={ChatListContent}>10</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <Typography style={RoomSubTitleBold}>참여자 목록</Typography>
            <Box sx={{ padding: 2 }}>
              <ChatPeopleList people={samplePersons} />
            </Box>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <Typography style={RoomSubTitleBold}>상담 요청 정보</Typography>
            <Stack spacing={3} sx={{ padding: 2 }}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Box width={64}>
                  <Typography style={RoomSubTitle}>MBTI</Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                  <MBTIChip label="ISTP" selected={false} color={getColorForMBTI("ISTP")} />
                  <MBTIChip label="INTP" selected={false} color={getColorForMBTI("INTP")} />
                  <MBTIChip label="ESTP" selected={false} color={getColorForMBTI("ESTP")} />
                </Stack>
              </Stack>
              <Stack direction="row" spacing={4} alignItems="center">
                <Box width={64}>
                  <Typography style={RoomSubTitle}>성별</Typography>
                </Box>
                <Typography style={ChatListContent}>모두</Typography>
              </Stack>
              <Stack direction="row" spacing={4} alignItems="center">
                <Box width={64}>
                  <Typography style={RoomSubTitle}>연령대</Typography>
                </Box>
                <Typography style={ChatListContent}>26 - 100</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="center">
            <ButtonText
              label="채팅 종료" color="#FF4545"
              onClick={handleChatEnd}
            />
          </Stack>
        </Stack>
      </Container>
      <ModalEditChat
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle="채팅 정보 수정하기"
      />

    </div>
  );
}

export default ChatInfo;