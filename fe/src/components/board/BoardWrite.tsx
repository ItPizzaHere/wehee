import React, { useState } from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Container, Box, Stack, TextField, Typography } from '@mui/material';
import ButtonBasic from 'components/common/ButtonBasic';
import { addPost } from 'services/loungeService';

function BoardWrite() {
  const { handleGoBack, handleBoardNavigate } = useCustomNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setTitle(e.target.value);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleCancel = () => {
    if(title.length !== 0 || content.length !== 0) {
      if (window.confirm("작성 중인 글이 사라집니다")) {
        handleGoBack();
      }
    } else {
      handleGoBack();
    }
  };

  const handleRegister = () => {
    const postData={
      title: title,
      content: content,
    };
    const newPost=addPost(postData);
    // post 요청 : axios.post('/api/boards', { title, content })...
    handleBoardNavigate();
    window.location.reload();
  };

  return (
    <div>
      <Container sx={{ paddingTop: 4 }}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            sx={{
              paddingY: 2,
              position: "sticky", top: 0, zIndex: 1, backgroundColor: "#fff"
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <ButtonBasic
                label="취소" variant="outlined"
                onClick={handleCancel}
              />
              <ButtonBasic
                label="등록" variant="contained"
                onClick={handleRegister}
                disabled={title.length === 0 || content.length === 0}
              />
            </Stack>
            <Box paddingX={2}>
              <TextField
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 작성하세요"
                variant="standard" fullWidth
                InputProps={{
                  endAdornment: (
                    <Typography variant="body2" color="#606060">{`${title.length}/30`}</Typography>
                  ),
                  disableUnderline: true
                }}
                inputProps={{ style: { fontSize: "1.5rem" } }}
              />
            </Box>
          </Stack>
          <Box paddingX={2}>
            <TextField
              value={content} fullWidth
              onChange={handleContentChange}
              placeholder="내용을 작성하세요"
              multiline
              inputProps={{ style: { fontSize: "1.15rem" } }}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default BoardWrite;