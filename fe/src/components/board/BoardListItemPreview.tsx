import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, ThumbUpAltOutlined, TextsmsOutlined } from '@mui/icons-material';
import { BoardListBoldTitle, BoardListPreview, BoardListReaction } from 'styles/fontStyle'
import { Link } from 'react-router-dom';

interface BoardListItemPreviewProps {
  postId: number;
  title: string;
  preview: string;
  time: string;
  hit: number;
  like: number;
  comment: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  firstItem?: boolean;
}

function BoardListItemPreview({ postId, title, preview, time, hit, like, comment, firstItem, onClick }: BoardListItemPreviewProps) {
  return (
    <Link to={`/board/view/${postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(136, 162, 255, 0.05)'
          }
        }}
      >
        <Stack
          spacing={1}
          sx={{
            borderTop: firstItem ? '1px solid #D3DCE9' : 'none',
            borderBottom: '1px solid #D3DCE9', padding: 1.5
          }}
        >
          <Typography style={BoardListBoldTitle}>{title}</Typography>
          <Typography
            style={{
              ...BoardListPreview,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {preview}
          </Typography>
          <Stack direction="row" spacing="auto">
            <Typography style={BoardListReaction}>{time}</Typography>
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
        </Stack>
      </Box>
    </Link>
  );
}

export default BoardListItemPreview;