import React, { useState, useEffect } from 'react';
import { initialState, MBTIChipData } from 'redux/mbtiSlice';
import { listHotPost } from 'services/loungeService';
import { Stack, Box, Typography } from '@mui/material';
import MBTIChip from 'components/common/MBTIChip';
import { BoardListRank, BoardListTitle } from 'styles/fontStyle'

interface BoardItem {
  postId: number;
  rank: number;
  mbti: string;
  title: string;
  hit: number;
  likeCount: number;
  commentCount: number;
}

function BoardHotMain() {
  const getColorForMBTI = (mbtiLabel: string) => {
    const mbtiItem = initialState.chipData.find((chip: MBTIChipData) => chip.label === mbtiLabel);
    return mbtiItem ? mbtiItem.color : "#303030";
  }

  let post: Array<BoardItem>;

  const data = listHotPost();
  const [boardList, setBoardList] = useState(data);
  const [postList, setPostList] = useState<BoardItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBoardList(data);
      await boardList.then((promiseResult) => {
        post = promiseResult.post;
      }).catch((error) => {
        console.error("Promise에서 오류 발생", error);
      });

      const postLength = post === null ? 0 : post.length;

      const postData = Array.from({ length: postLength }, (v, k) => ({
        postId: post[k].postId,
        rank: post[k].rank,
        mbti: post[k].mbti,
        title: post[k].title,
        hit: post[k].hit,
        likeCount: post[k].likeCount,
        commentCount: post[k].commentCount,
      }));
      setPostList(postData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Stack>
        {postList.slice(0, 5).map((item, index) => (
          <Stack
            key={item.postId} direction="row" spacing={2}
            sx={{ height: 44 }} alignItems="center"
          >
            <Box width={24}>
              <Typography style={BoardListRank} textAlign="center">{item.rank}</Typography>
            </Box>
            <MBTIChip label={item.mbti} selected={false} color={getColorForMBTI(item.mbti)} />
            <Typography style={BoardListTitle}>{item.title}</Typography>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default BoardHotMain;