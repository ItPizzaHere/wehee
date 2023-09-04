import React, { useState } from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Container, Box, Stack, TextField, Typography } from '@mui/material';
import ButtonBasic from 'components/common/ButtonBasic';
import { editPost } from 'services/loungeService';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'redux/store';
import usePostUpdate from 'hooks/usePostUpdate';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function BoardEdit() {
  const { handleGoBack, handleBoardNavigate } = useCustomNavigate();

  const { postId } = useParams<{ postId: string }>();
  let postIdNumber = 0;
  if(postId) {
    postIdNumber = parseInt(postId);
  }

  const user = useSelector((state: RootState) => state.user);
  const post = useSelector((state: RootState) => state.post);
  const { updatePost, updatePostId, updateTitle, updateContent, updateUserId, updateProfile, updateNickname, updateUploadTime, updateHit, updateLikeCount, updateLiked, updateScrapped, updateCommentCount, updateCommentList } = usePostUpdate();


  if(post.postId !== postIdNumber) {
    alert("잘못된 접근입니다.");
    handleGoBack();
  }

  if(post.userId !== user.userId) {
    alert("게시글은 작성자만이 수정할 수 있습니다.");
    handleGoBack();
  }

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  React.useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post.title, post.content]);

  const originTitle = post.title;
  const originContent = post.content;

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
    if(originTitle === title && originContent === content) {
      alert("변경된 내용이 없습니다.");
    } else {
    const postData={
      postId: post.postId,
      title: title,
      content: content,
    };
    updateTitle(title);
    updateContent(content);
    const updatePost=editPost(postData);
    // post 요청 : axios.post('/api/boards', { title, content })...
    handleBoardNavigate();
    window.location.reload();
  }
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
                label="수정" variant="contained"
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

export default BoardEdit;