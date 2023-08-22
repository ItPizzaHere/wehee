import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { resetMbtiSelect } from 'redux/mbtiSlice';
import useChatCreateUpdate from 'hooks/useChatCreateUpdate';
import { Stack, Box, Container, Select, MenuItem, TextField, Slider, Typography, FormControl, FormControlLabel, InputLabel, RadioGroup, Radio, Divider } from '@mui/material';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';
import MBTIMultiSelect from 'components/chat/MBTIMultiSelect';
import { black } from 'styles/fontStyle';
import { postNewChat } from 'services/chatService';

type ModalCreateChatProps = {
  isModalOpen: boolean;
  modalTitle: string;
  onClose: () => void;
};

function ModalCreateChat({ isModalOpen, modalTitle, onClose }: ModalCreateChatProps) {
  const dispatch = useDispatch();
  const chatCreate = useSelector((state: RootState) => state.chatCreate);
  const { title, category, limit, selectedMBTI, gender, ageRange, isCreateButtonEnabled } = chatCreate;
  const { updateTitle, updateCategory, updateLimit, updateGender, resetSelectedMBTI, updateAgeRange, updateIsCreateButtonEnabled, updateChatCreateInit } = useChatCreateUpdate();

  const categories = ['짝사랑', '썸', '연애', '이별', '재회'];
  const genderOptions = ['모두', '남', '여'];

  const validateAgeInput = (value: number) => {
    return !isNaN(value) && value >= 0 && value <= 100;
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      updateTitle(e.target.value);
    }
  };

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (isModalOpen) {
      dispatch(resetMbtiSelect());
      resetSelectedMBTI();
      updateChatCreateInit();
    }
  }, [isModalOpen]);

  useEffect(() => {
    updateIsCreateButtonEnabled(title.length > 0 && category.length > 0 && selectedMBTI.length > 0 && selectedMBTI.length <= 3);
  }, [title, category, selectedMBTI]);  

  const handleCreateChat = () => {
    const chatInfo = {
      title,
      category,
      limit,
      gender,
      mbtis: selectedMBTI,
      minAge: ageRange[0],
      maxAge: ageRange[1],
    }

    console.log(chatInfo);
    postNewChat(chatInfo);

    onClose();
  };

  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
      actions={
        <ButtonBasic
          label="채팅 생성" variant="contained" color="primary"
          onClick={handleCreateChat} disabled={!isCreateButtonEnabled}
        />
      }
    >
      <Stack spacing={2}>
        <TextField
          label="" placeholder="제목을 작성하세요" fullWidth
          value={title} onChange={handleTitleChange}
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="#606060">{`${title.length}/30`}</Typography>
            )
          }}
        />
        <Stack direction="row" spacing="auto">
          <Box width="40%">
            <FormControl fullWidth>
              <InputLabel id="카테고리 설정">카테고리</InputLabel>
              <Select
                labelId="카테고리 설정"
                value={category}
                label="카테고리"
                onChange={e => updateCategory(e.target.value as string)}
              >
                {categories.map(tag =>
                  <MenuItem key={tag} value={tag}>{tag}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
          <Box width="50%">
            <Stack direction="row" alignItems="center">
              <Container>
                <Typography noWrap>제한 인원</Typography>
              </Container>
              <TextField
                type="number" label="" value={limit}
                onChange={e => updateLimit(Math.min(Math.max(+e.target.value, 1), 10))}
              />
            </Stack>
          </Box>
        </Stack>
        <Divider />
        <Typography style={black}>어떤 사람에게 상담을 요청할까요?</Typography>
        <Stack direction="row" spacing={5} alignItems="center">
          <Typography>성별 설정</Typography>
          <RadioGroup row value={gender} onChange={e => updateGender(e.target.value)}>
            {genderOptions.map(gen => (
              <FormControlLabel key={gen} value={gen} control={<Radio />} label={gen} />
            ))}
          </RadioGroup>
        </Stack>
        <Stack>
          <Stack>
            <Typography>MBTI 선택(최대 3개)</Typography>
            <Container sx={{ width: 340 }}>
              <MBTIMultiSelect />
            </Container>
          </Stack>
          <Typography>연령대 설정</Typography>
          <Stack direction="row" spacing={3} alignItems="center" sx={{ width: "100%" }}>
            <TextField
              value={ageRange[0]}
              onChange={e => {
                const newValue = +e.target.value;
                if (validateAgeInput(newValue)) {
                  updateAgeRange([newValue, ageRange[1]]);
                }
              }}
              sx={{ width: 96 }}
            />
            <Slider
              value={ageRange}
              onChange={(_, newValue) => updateAgeRange(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
            <TextField
              value={ageRange[1]}
              onChange={e => {
                const newValue = +e.target.value;
                if (validateAgeInput(newValue)) {
                  updateAgeRange([ageRange[0], newValue]);
                }
              }}
              sx={{ width: 96 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </ModalWithClose>
  );
}

export default ModalCreateChat;