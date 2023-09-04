import React from 'react';
import { Link } from 'react-router-dom';
import { initialState, MBTIChipData } from 'redux/mbtiSlice';
import { Box, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, ThumbUpAltOutlined, TextsmsOutlined } from '@mui/icons-material';
import { BoardListRank, BoardListTitle, BoardListReaction } from 'styles/fontStyle'
import MBTIChip from 'components/common/MBTIChip';

interface BoardListItemHotProps {
  postId: number;
  rank: number;
  mbti: string;
  title: string;
  hit: number;
  like: number;
  comment: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  firstItem?: boolean;
}

function BoardListItemHot({ postId, rank, mbti, title, hit, like, comment, firstItem, onClick }: BoardListItemHotProps) {

  const getColorForMBTI = (mbtiLabel: string) => {
    const mbtiItem = initialState.chipData.find((chip: MBTIChipData) => chip.label === mbtiLabel);
    return mbtiItem ? mbtiItem.color : "#303030";
  }

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
          direction="row" spacing="auto" alignItems="center"
          sx={{
            borderTop: firstItem ? '1px solid #D3DCE9' : 'none',
            borderBottom: '1px solid #D3DCE9', padding: 1.5
          }}
        >
          <Stack direction="row" spacing={2}>
            <Box width={24}>
              <Typography style={BoardListRank} textAlign="center">{rank}</Typography>
            </Box>
            <MBTIChip label={mbti} selected={false} color={getColorForMBTI(mbti)} />
            <Typography style={BoardListTitle}>{title}</Typography>
          </Stack>
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
    </Link >
  );
}

export default BoardListItemHot;