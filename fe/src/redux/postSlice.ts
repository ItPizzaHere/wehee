import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Comment {
  commentId: number;
  userId: number;
  profile: string;
  nickname: string;
  content: string;
  uploadTime: string;
}

export interface PostState {
  postId: number;
  title: string;
  content: string;
  userId: number;
  profile: string;
  nickname: string;
  uploadTime: string;
  hit: number;
  likeCount: number;
  liked: boolean;
  scrapped: boolean;
  commentCount: number;
  commentList: Comment[];
}

const initialState: PostState = {
  postId: 0,
  title: "",
  content: "",
  userId: 0,
  profile: "",
  nickname: "",
  uploadTime: "",
  hit: 0,
  likeCount: 0,
  liked: false,
  scrapped: false,
  commentCount: 0,
  commentList: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostState>) => {
      return action.payload;
    },
    toggleLike: (state) => {
      state.liked = !state.liked;
      state.liked ? state.likeCount += 1 : state.likeCount -= 1;
    },
    toggleScrap: (state) => {
      state.scrapped = !state.scrapped;
    },
    setCommentList: (state, action: PayloadAction<Comment[]>) => {
      state.commentList = action.payload;
    },
    pushComment: (state, action: PayloadAction<Comment>) => {
      state.commentList.push(action.payload);
      state.commentCount += 1; // 댓글 수 증가
    },
    setPostId: (state, action: PayloadAction<number>) => {
      state.postId=action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title=action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content=action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId=action.payload;
    },
    setProfile: (state, action: PayloadAction<string>) => {
      state.profile=action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname=action.payload;
    },
    setUploadTime: (state, action: PayloadAction<string>) => {
      state.uploadTime=action.payload;
    },
    setHit: (state, action: PayloadAction<number>) => {
      state.hit=action.payload;
    },
    setLikeCount: (state, action: PayloadAction<number>) => {
      state.likeCount=action.payload;
    },
    setCommentCount: (state, action: PayloadAction<number>) => {
      state.commentCount=action.payload;
    },
    setLiked: (state, action: PayloadAction<boolean>) => {
      state.liked=action.payload;
    },
    setScrapped: (state, action: PayloadAction<boolean>) => {
      state.scrapped=action.payload;
    },
  },
});

export const { setPost, toggleLike, toggleScrap, setCommentList, pushComment, setPostId, setCommentCount, setContent, setHit, setLikeCount, setLiked, setNickname, setProfile, setScrapped, setTitle, setUploadTime, setUserId } = postSlice.actions;
export default postSlice.reducer;