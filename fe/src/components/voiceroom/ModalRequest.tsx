import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';
import { scrollStyle } from 'styles/scroll';

type ModalRequestProps = {
  isModalOpen: boolean;
  modalTitle: string;
  onClose: () => void;
};

function ModalRequest({ isModalOpen, modalTitle, onClose }: ModalRequestProps) {
  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
    >
      <Box 
        sx={{ ...scrollStyle, overflowY: "auto", 
        width: 400, height: 320, paddingX: 2}}
      >
        <Stack spacing={4}>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>발표하고싶은사람 #ENFP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>hihi #ISTP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>박사님 #ISTJ</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>닉네임임 #INTP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>포카칩햇감자 #ESTP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>엥뿌삐 #ENFP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>왜지감자 #ISTP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="auto">
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" />
              <Typography>전좋아요 #ESFP</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ButtonBasic label="수락" variant="outlined" />
              <ButtonBasic label="거절" variant="outlined" />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </ModalWithClose>
  );
}

export default ModalRequest;