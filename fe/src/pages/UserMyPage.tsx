import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { initialState, MBTIChipData, selectedMBTI } from 'redux/mbtiSlice';
import useCustomHover from '../hooks/useCustomHover';
import useUserUpdate from '../hooks/useUserUpdate';
import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import { Container, Stack, Box, Avatar, Typography, Divider } from '@mui/material';
import { AddPhotoAlternateRounded, InfoOutlined } from '@mui/icons-material';
import { myPageLabelContent, myPageLabelTitle, regular } from 'styles/fontStyle';
import ButtonBasic from 'components/common/ButtonBasic';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import MBTIChip from 'components/common/MBTIChip';
import ModalEdit from 'components/user/ModalEdit'
import ModalDrop from 'components/user/ModalDrop';
import { getCanModify, updateNickname, updateBirth, updateGender, updateMbti, withdrawUser } from 'services/mypageService';

function UserMyPage() {
  const { isHovered: mbtiIsHovered, handleMouseEnter: handleMbtiMouseEnter, handleMouseLeave: handleMbtiMouseLeave } = useCustomHover();
  const { isHovered: genderIsHovered, handleMouseEnter: handleGenderMouseEnter, handleMouseLeave: handleGenderMouseLeave } = useCustomHover();
  const { isHovered: birthIsHovered, handleMouseEnter: handleBirthMouseEnter, handleMouseLeave: handleBirthMouseLeave } = useCustomHover();
  const { isHovered: dropIsHovered, handleMouseEnter: handleDropMouseEnter, handleMouseLeave: handleDropMouseLeave } = useCustomHover();

  const user = useSelector((state: RootState) => state.user);
  const [originalUser, setOriginalUser] = useState(user);

  const getColorForMBTI = (mbtiLabel: string) => {
    const mbtiItem = initialState.chipData.find((chip: MBTIChipData) => chip.label === mbtiLabel);
    return mbtiItem ? mbtiItem.color : "#303030";
  }

  const newMbti = useSelector(selectedMBTI);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalDropOpen, setModalDropOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<"nickname" | "mbti" | "gender" | "birth" | null>(null);

  const { updateUser, updateMBTI, updateCanModifyMBTI, updateCanModifyGender, updateCanModifyBirth } = useUserUpdate();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const canModify = await getCanModify();
        updateCanModifyMBTI(canModify.mbti);
        updateCanModifyGender(canModify.gender);
        updateCanModifyBirth(canModify.birth);
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
      }
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    setOriginalUser(user);
  }, [isModalOpen]);

  const openModal = (title: string, content: "nickname" | "mbti" | "gender" | "birth") => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    window.location.reload();
  };

  const openModalDrop = () => {
    setModalDropOpen(true);
  };

  const confirmUpdate = (message: string, updateAction: () => void) => {
    if (window.confirm(message)) {
      updateAction();
    } else {
      updateUser(originalUser);
    }
  };

  const handleUpdate = () => {
    const updateActions: { [key: string]: () => void } = {
      "nickname": async () => {
        updateNickname(user.nickname);
      },
      "mbti": () => {
        updateMbti(newMbti[0]);
        updateMBTI(newMbti[0]);
        console.log(newMbti);
      },
      "gender": () => {
        updateGender(user.gender);
        console.log(user.gender);
      },
      "birth": () => {
        updateBirth(user.birth);
        console.log('새로운 생일:', user.birth);
      },
    };

    const confirmMessages: { [key: string]: string } = {
      "mbti": "지금 변경하면 5주간 변경이 불가능합니다. 수정하시겠습니까?",
      "gender": "지금 변경하면 앞으로 변경이 불가능합니다. 수정하시겠습니까?",
      "birth": "지금 변경하면 앞으로 변경이 불가능합니다. 수정하시겠습니까?"
    };

    if (modalContent && confirmMessages[modalContent]) {
      confirmUpdate(confirmMessages[modalContent], updateActions[modalContent]);
    } else if (modalContent) {
      updateActions[modalContent]();
    }

    closeModal();
  };

  const handleDrop = () => {
    const confirmMessage = "정말로 회원 탈퇴하시겠습니까?";

    if (window.confirm(confirmMessage)) {
      withdrawUser();
      // 회원 탈퇴 로직
    }

    setModalDropOpen(false);
  }

  return (
    <div>
      <LayoutAfterLogin>
        <Container maxWidth="md" sx={{ paddingY: 10 }}>
          <Stack spacing={6}>
            <Stack direction="row" spacing={4} alignItems="flex-end">
              <Avatar
                src={user.profile}
                alt="Remy Sharp"
                sx={{ width: 192, height: 192 }}
              />
              <Box flexGrow={1} sx={{ paddingBottom: 2 }}>
                <ButtonHasIcon
                  icon={<AddPhotoAlternateRounded />} label='프로필 사진 변경'
                  variant="outlined" color="primary" disabled
                />
              </Box>
            </Stack>
            <Stack direction="row" spacing={12} alignItems="center">
              <Typography style={myPageLabelTitle}>닉네임</Typography>
              <Stack direction="row" spacing={6} alignItems="center">
                <Typography style={myPageLabelContent}>{user.nickname}</Typography>
                <ButtonBasic
                  label='수정' variant='contained' color='primary'
                  onClick={() => openModal("닉네임 수정하기", "nickname")}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={12} alignItems="flex-start">
              <Typography style={myPageLabelTitle}>MBTI</Typography>
              <Stack alignItems="flex-start" spacing={2}>
                <MBTIChip label={user.mbti} selected={false} color={getColorForMBTI(user.mbti)} />
                {user.canModifyMBTI ? (
                  <div style={{ display: 'flex' }}>
                    <Typography color='#606060'>혹시 MBTI가 변경되셨나요? &nbsp;</Typography>
                    <Typography
                      color='#716FDC'
                      onMouseEnter={handleMbtiMouseEnter}
                      onMouseLeave={handleMbtiMouseLeave}
                      style={{ textDecoration: mbtiIsHovered ? 'underline' : 'none' }}
                      onClick={() => openModal("MBTI 수정하기", "mbti")}
                    >
                      수정하기
                    </Typography>
                  </div>
                ) : (
                  <Typography color='#606060'>최종 수정일로부터 5주가 지난 후에 변경이 가능합니다.</Typography>
                )}
              </Stack>
            </Stack>
            <Divider sx={{ backgroundColor: '#CAB8FF', height: 1.15, my: 10 }} />
            <Stack spacing={3}>
              <Stack direction="row" spacing={1}>
                <InfoOutlined sx={{ color: '#909090' }} />
                <Typography color='#909090'>성별과 생년월일은 최초 1회 수정만 가능합니다.</Typography>
              </Stack>
              <Stack direction="row" spacing="auto" paddingX={2}>
                <Stack spacing={2} flex="1">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography style={myPageLabelTitle}>성별</Typography>
                    <Typography color='#909090' style={regular}>&nbsp;|&nbsp;</Typography>
                    {user.canModifyGender ? (
                      <Typography
                        color='#716FDC'
                        onMouseEnter={handleGenderMouseEnter}
                        onMouseLeave={handleGenderMouseLeave}
                        style={{ textDecoration: genderIsHovered ? 'underline' : 'none' }}
                        onClick={() => openModal("성별 수정하기", "gender")}
                      >
                        수정하기
                      </Typography>
                    ) : (
                      <Typography color='#909090'>수정 불가</Typography>
                    )}
                  </div>
                  <Typography style={myPageLabelContent}>
                    {user.gender === 'FEMALE' ? '여' : user.gender === 'MALE' ? '남' : ''}
                  </Typography>
                </Stack>
                <Stack spacing={2} flex="1">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography style={myPageLabelTitle}>출생연도</Typography>
                    <Typography color='#909090' style={regular}>&nbsp;|&nbsp;</Typography>
                    {user.canModifyBirth ? (
                      <Typography
                        color='#716FDC'
                        onMouseEnter={handleBirthMouseEnter}
                        onMouseLeave={handleBirthMouseLeave}
                        style={{ textDecoration: birthIsHovered ? 'underline' : 'none' }}
                        onClick={() => openModal("태어난 연도 수정하기", "birth")}
                      >
                        수정하기
                      </Typography>
                    ) : (
                      <Typography color='#909090'>수정 불가</Typography>
                    )}
                  </div>
                  <Typography style={myPageLabelContent}>{user.birth}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
              <InfoOutlined sx={{ color: '#909090' }} />
              <Typography color='#909090'>회원 탈퇴를 원하십니까?</Typography>
              <Typography
                color='#716FDC'
                onMouseEnter={handleDropMouseEnter}
                onMouseLeave={handleDropMouseLeave}
                style={{ textDecoration: dropIsHovered ? 'underline' : 'none' }}
                onClick={openModalDrop}
              >
                탈퇴하기
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </LayoutAfterLogin>

      <ModalEdit
        isModalOpen={isModalOpen}
        modalTitle={modalTitle}
        modalContent={modalContent}
        onClose={() => { updateUser(originalUser); closeModal(); }}
        onConfirm={handleUpdate}
      />

      <ModalDrop
        open={isModalDropOpen}
        onClose={() => setModalDropOpen(false)}
        onConfirm={handleDrop}
      />
    </div>
  );
}

export default UserMyPage;