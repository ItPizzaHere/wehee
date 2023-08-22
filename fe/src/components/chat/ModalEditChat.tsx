import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { resetMbtiSelect } from 'redux/mbtiSlice';
import useChatCreateUpdate from 'hooks/useChatCreateUpdate';
import { Stack, Box, Container, Select, MenuItem, TextField, Typography, FormControl, InputLabel } from '@mui/material';
import ModalWithClose from 'components/common/ModalWithClose';
import ButtonBasic from 'components/common/ButtonBasic';

type ModalCreateChatProps = {
  isModalOpen: boolean;
  modalTitle: string;
  onClose: () => void;
};

function ModalCreateChat({ isModalOpen, modalTitle, onClose }: ModalCreateChatProps) {
  const dispatch = useDispatch();
  const chatCreate = useSelector((state: RootState) => state.chatCreate);
  const { title, category, limit, isCreateButtonEnabled } = chatCreate;
  const { updateTitle, updateCategory, updateLimit, resetSelectedMBTI, updateIsCreateButtonEnabled, updateChatCreateInit } = useChatCreateUpdate();

  const categories = ['짝사랑', '썸', '연애', '이별', '재회'];

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      updateTitle(e.target.value);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      dispatch(resetMbtiSelect());
      resetSelectedMBTI();
      updateChatCreateInit();
    }
  }, [isModalOpen]);

  useEffect(() => {
    updateIsCreateButtonEnabled(title.length > 0 && category.length > 0);
  }, [title, category]);

  const handleEditChat = () => {
    const chatData = {
      title,
      category,
      limit,
    };

    console.log(chatData);
    // 서버 통신 로직 구현 및 성공 시 모달 닫기
    // 이후에 서버로 데이터를 보내고 성공했을 때에는 onClose()를 호출하여 모달을 닫을 수 있습니다.
    // 이 부분은 프로젝트에 맞게 서버와의 통신 코드를 추가해야 합니다.
    onClose();
  };

  return (
    <ModalWithClose
      open={isModalOpen}
      onClose={onClose}
      title={modalTitle}
      actions={
        <ButtonBasic
          label="정보 수정" variant="contained" color="primary"
          onClick={handleEditChat} disabled={!isCreateButtonEnabled}
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
      </Stack>
    </ModalWithClose>
  );
}

export default ModalCreateChat;