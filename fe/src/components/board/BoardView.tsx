import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { Container, Divider, Stack } from '@mui/material'
import ViewPost from './ViewPost';
import ViewComment from './ViewComment';
import { getPost } from 'services/loungeService';
import { useParams } from 'react-router-dom';
import { PostState, postSlice } from 'redux/postSlice';
import { error } from 'console';
import usePostUpdate from 'hooks/usePostUpdate';

interface CommentItem {
  commentId: number;
  userId: number;
  nickname: string;
  profile: string;
  content: string;
  uploadTime: string;
}

function BoardView() {
  const post=useSelector((state: RootState) => state.post);
  const { updatePost, updatePostId, updateTitle, updateContent, updateUserId, updateProfile, updateNickname, updateUploadTime, updateHit, updateLikeCount, updateLiked, updateScrapped, updateCommentCount, updateCommentList } = usePostUpdate();

  let postIdNumber=0;

  const { postId } = useParams<{ postId?: string }>();

    if(postId) {
      postIdNumber=parseInt(postId);
    }

  const data=getPost(postIdNumber);
    const [commentList, setCommentList] = useState<CommentItem[]>([]);

    useEffect(() => {

      const fetchData=async() => {
        await data.then((promiseResult) => {
          updatePostId(promiseResult.postId);
          updateTitle(promiseResult.title);
          updateContent(promiseResult.content);
          updateUserId(promiseResult.userId);
          updateHit(promiseResult.hit);
          updateLikeCount(promiseResult.likeCount);
          updateLiked(promiseResult.liked);
          updateCommentCount(promiseResult.commentCount);
          updateScrapped(promiseResult.scrapped);
          updateNickname(promiseResult.nickname);
          updateProfile(promiseResult.profile);
          updateUploadTime(promiseResult.uploadTime);
          updateCommentList(promiseResult.commentList);
      }).catch((error) => {
        console.error("Promise에서 오류 발생", error);
      });

    };
      fetchData();
    }, [postIdNumber]);

  return (
    <div>
      <Container>
        <Stack spacing={4}>
          <ViewPost
            postId = {postIdNumber}
            title = {post.title}
            content ={post.content}
            userId={post.userId}
            profile ={post.profile}
            nickname ={post.nickname}
            time = {post.uploadTime}
            hit = {post.hit}
            like = {post.likeCount}
            liked = {post.liked}
            scrapped = {post.scrapped}
          />
          <Divider />
          <ViewComment
            postId = {postIdNumber}
            comment = {post.commentCount}
            comments = {post.commentList} />
        </Stack>
      </Container>
    </div>
  );
}

export default BoardView;