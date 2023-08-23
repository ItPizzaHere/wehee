import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushComment } from 'redux/postSlice';
import { Box, Stack, Avatar, TextField, Typography, } from '@mui/material';
import { BoardCommentTitle, BoardContent, BoardNickname, BoardViewInfo } from 'styles/fontStyle';
import ButtonBasic from 'components/common/ButtonBasic';
import { addComment } from 'services/loungeService';
import { RootState } from 'redux/store';
import usePostUpdate from 'hooks/usePostUpdate';

interface ViewCommentProps {
  comment: number,
  postId: number,
  comments: {
    commentId: number;
    userId: number;
    profile: string;
    nickname: string;
    content: string;
    uploadTime: string;
  }[];
}

function ViewComment({ postId, comment, comments }: ViewCommentProps) {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState('');
  const commentList=useSelector((state: RootState) => state.post.commentList);
  const { updateCommentList } = usePostUpdate();

  const handleCommentSubmit = async() => {
    const commentData={
      postId: postId,
      content: commentInput,
    };
    await addComment(commentData).then((result) => {
      if(result.state == 1) {
        comment = comment + 1;
        comments=result.commentList;
        updateCommentList(comments);
      }
    })
    setCommentInput('');
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1.5}>
        <Typography style={BoardCommentTitle}>댓글</Typography>
        <Typography style={BoardContent}>{comment}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TextField
          fullWidth
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          variant="standard"
          label=""
          placeholder="댓글을 입력하세요"
          multiline maxRows={4}
        />
        <Box>
          <ButtonBasic label="입력" variant="contained" onClick={handleCommentSubmit} />
        </Box>
      </Stack>
      <Stack>
        {comments.map((comment, index) => (
          <Stack key={index} sx={{ paddingX: 1, paddingY: 2 }}>
            <Stack direction="row" spacing={2}>
              <Avatar src={comment.profile} />
              <Stack flexGrow={1} spacing={1}>
                <Stack direction="row" spacing="auto" alignItems="center">
                  <Typography style={BoardNickname}>{comment.nickname}</Typography>
                  <Typography style={BoardViewInfo}>{comment.uploadTime}</Typography>
                </Stack>
                <Typography style={BoardContent}>{comment.content}</Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ViewComment;