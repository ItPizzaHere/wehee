import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, ThumbUpAltOutlined, TextsmsOutlined } from '@mui/icons-material';
import { BoardListTitle, BoardListReaction } from 'styles/fontStyle'
import { setPostId } from 'redux/postSlice';
import { useDispatch } from 'react-redux';

interface BoardListItemProps {
  postId: number;
  title: string;
  hit: number;
  like: number;
  comment: number;
  firstItem?: boolean;
}

function BoardListItem({ postId, title, hit, like, comment, firstItem }: BoardListItemProps) {
  // const dispatch=useDispatch();
  // const handleClick=() => {
  //   dispatch(setPostId(postId));
  // };
  return (
    <Link to={`/board/view/${postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box //onClick={handleClick}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(136, 162, 255, 0.05)'
          }
        }}
      >
        <Stack
          direction="row" spacing="auto" alignItems="center"
          sx={{
            borderTop: firstItem ? '1px solid #D3DCE9' : 'none',
            borderBottom: '1px solid #D3DCE9', padding: 1.5
          }}
        >
          <Typography style={BoardListTitle}>{title}</Typography>
          <Stack direction="row" spacing={0.75}>
            <Box display="flex" alignItems="center" width={44} justifyContent="space-between">
              <VisibilityOutlined sx={{ fontSize: '1.15rem', color: "#909090" }} />
              <Typography style={{ ...BoardListReaction, width: 28, textAlign: "center" }}>{hit}</Typography>
            </Box>
            <Typography style={BoardListReaction}>·</Typography>
            <Box display="flex" alignItems="center" width={44} justifyContent="space-between">
              <ThumbUpAltOutlined sx={{ fontSize: '1.15rem', color: "#909090" }} />
              <Typography style={{ ...BoardListReaction, width: 28, textAlign: "center" }}>{like}</Typography>
            </Box>
            <Typography style={BoardListReaction}>·</Typography>
            <Box display="flex" alignItems="center" width={44} justifyContent="space-between">
              <TextsmsOutlined sx={{ fontSize: '1.15rem', color: "#909090" }} />
              <Typography style={{ ...BoardListReaction, width: 28, textAlign: "center" }}>{comment}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}

export default BoardListItem