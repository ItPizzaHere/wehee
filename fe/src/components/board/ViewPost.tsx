import React from 'react';
import { useDispatch } from 'react-redux';
import useMenuAnchor from '../../hooks/useMenuAnchor';
import { Container, Stack, Typography, Avatar, Divider, Tooltip, IconButton, Menu, MenuItem } from '@mui/material';
import { ThumbUp, Bookmark, MoreVert } from '@mui/icons-material';
import { BoardViewTitle, BoardViewInfo, BoardContent } from 'styles/fontStyle';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import { toggleLike, toggleScrap } from 'redux/postSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'redux/store';
import { distributeLike, distributeScrap } from 'services/loungeService';
import { deletePost } from 'services/loungeService';
import useCustomNavigate from 'hooks/useCustomNavigate';
import usePostUpdate from 'hooks/usePostUpdate';

interface ViewPostProps {
  postId: number;
  title: string;
  content: string;
  userId: number;
  profile: string;
  nickname: string;
  time: string;
  hit: number;
  like: number;
  liked: boolean;
  scrapped: boolean;
}

function ViewPost({ postId, title, content, userId, profile, nickname, time, hit, like, liked, scrapped }: ViewPostProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const post = useSelector((state: RootState) => state.post);
  const { updatePost, updatePostId, updateTitle, updateContent, updateUserId, updateProfile, updateNickname, updateUploadTime, updateHit, updateLikeCount, updateLiked, updateScrapped, updateCommentCount, updateCommentList } = usePostUpdate();

  const canShowMenu = userId === user.userId;
  const { handleBoardNavigate, handleBoardEditNavigate } = useCustomNavigate();

  const handleLikeClick = () => { // 좋아요 
    dispatch(toggleLike());
    distributeLike(postId);
  };

  const handleScrapClick = () => { // 스크랩
    dispatch(toggleScrap());
    distributeScrap(postId);
  };

  const { open, anchorEl, handleClick, handleClose } = useMenuAnchor();

  const handleMenuClick = (action: string) => {
    if (action === 'edit') {
      updatePostId(postId);
      updateTitle(title);
      updateContent(content);
      updateUserId(userId);
      console.log(post.userId);
      console.log(userId);
      console.log(user.userId);
      handleBoardEditNavigate(postId);
      // 수정 로직 구현
    } else if (action === 'delete') {
      const confirmMessage="게시글을 삭제하시겠습니까?";

      if(window.confirm(confirmMessage)) {
        deletePost(postId);
        handleBoardNavigate();
        window.location.reload();
          }
      // 삭제 로직 구현
    }
    handleClose(); // 메뉴를 닫습니다.
  };

  return (
    <Stack spacing={2}>
      <Typography style={BoardViewTitle}>{title}</Typography>
      <Stack direction="row" spacing="auto">
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar alt="profile" src={profile} sx={{ width: 30, height: 30 }} />
          <Typography style={BoardViewInfo} fontSize="1.15rem">{nickname}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography style={BoardViewInfo}>작성시간</Typography>
          <Typography style={BoardViewInfo}>{time}</Typography>
          <Typography style={BoardViewInfo}>·</Typography>
          <Typography style={BoardViewInfo}>조회수</Typography>
          <Typography style={BoardViewInfo}>{hit}</Typography>
          {canShowMenu?(
          <Tooltip title="">
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>
          </Tooltip>
          ):null}
          {canShowMenu?(
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => handleMenuClick('edit')}>수정</MenuItem>
            <MenuItem onClick={() => handleMenuClick('delete')}>삭제</MenuItem>
          </Menu>
          ):null}
          </Stack>
      </Stack>
      <Divider />
      <Container>
        <Stack spacing={2}>
          <Typography style={BoardContent}>{content}</Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <ButtonHasIcon
              icon={<ThumbUp />}
              label={like.toString()}
              variant={liked ? "contained" : "outlined"}
              onClick={handleLikeClick}
            />
            <ButtonHasIcon
              icon={<Bookmark />}
              label={scrapped ? "저장됨" : "스크랩"}
              variant={scrapped ? "contained" : "outlined"}
              color='secondary'
              onClick={handleScrapClick}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default ViewPost;