import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useUserUpdate from '../../hooks/useUserUpdate';
import { checkNicknameAvailability } from 'services/authService';
import { Stack, Box, TextField, Typography } from '@mui/material';
import ButtonBasic from 'components/common/ButtonBasic';
import ModalDuplicate from 'components/user/ModalDuplicate';

function NicknameField() {
  const user = useSelector((state: RootState) => state.user);
  const { updateNickname, updateDuplicate } = useUserUpdate();

  const [nickname, setNickname] = useState(user.nickname);
  const [isChecking, setIsChecking] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailableModal, setIsAvailableModal] = useState(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setNickname(newValue);
    setIsButtonEnabled(newValue !== user.nickname);
    updateDuplicate(true);
  };

  const handleCheckDuplicate = async () => {
    setIsChecking(true);

    try {
      const isAvailable = await checkNicknameAvailability(nickname);
      updateNickname(nickname);
      updateDuplicate(!isAvailable);

      setIsAvailableModal(isAvailable);
      setIsModalOpen(true);
    } catch (error) {
      console.error('닉네임 중복 확인 에러:', error);
    }

    setIsChecking(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);

    if (isAvailableModal) {
      setNickname(user.nickname);
    } else {
      updateNickname(user.nickname)
      setIsButtonEnabled(false); // 중복확인 버튼 비활성화
      updateDuplicate(false);
    }
  };

  useEffect(() => {
    setNickname(user.nickname);
    setIsButtonEnabled(false);
  }, [user.nickname]);

  const isInputSameAsUser = nickname === user.nickname;

  return (
    <Box width="330">
      <Stack direction="row" spacing="auto">
        <TextField
          id="nickname"
          label=""
          placeholder="닉네임 입력"
          variant="outlined"
          value={nickname}
          onChange={handleNicknameChange}
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="#606060">{`${nickname.length}/10`}</Typography>
            ),
          }}
          inputProps={{ maxLength: 10 }}
          sx={{ width: '70%' }}
          size="small"
        />
        <ButtonBasic
          label="중복 확인"
          variant="contained"
          color="primary"
          onClick={handleCheckDuplicate}
          disabled={!isButtonEnabled || isChecking || isInputSameAsUser}
        />
      </Stack>
      <ModalDuplicate
        open={isModalOpen}
        onClose={handleModalClose}
        isDuplicated={isAvailableModal}
      />
    </Box>
  );
}

export default NicknameField;
