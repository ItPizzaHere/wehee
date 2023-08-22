import { useDispatch } from "react-redux";
import { Comment, PostState, setCommentCount, setCommentList, setContent, setHit, setLikeCount, setLiked, setNickname, setPost, setPostId, setProfile, setScrapped, setTitle, setUploadTime, setUserId } from "redux/postSlice";

function usePostUpdate() {
    const dispatch = useDispatch();

    const updatePost = (originalPost: PostState) => {
        dispatch(setPost(originalPost));
    };

    const updatePostId = (newPostId: number) => {
        dispatch(setPostId(newPostId));
    };

    const updateTitle = (newTitle: string) => {
        dispatch(setTitle(newTitle));
    };

    const updateContent = (newContent: string) => {
        dispatch(setContent(newContent));
    };

    const updateUserId = (newUserId: number) => {
        dispatch(setUserId(newUserId));
    };

    const updateProfile = (newProfile: string) => {
        dispatch(setProfile(newProfile));
    };

    const updateNickname = (newNickname: string) => {
        dispatch(setNickname(newNickname));
    };

    const updateUploadTime = (newUploadTime: string) => {
        dispatch(setUploadTime(newUploadTime));
    };

    const updateHit = (newHit: number) => {
        dispatch(setHit(newHit));
    };

    const updateLikeCount = (newLikeCount: number) => {
        dispatch(setLikeCount(newLikeCount));
    };

    const updateLiked = (newLiked: boolean) => {
        dispatch(setLiked(newLiked));
    };

    const updateScrapped = (newScrapped: boolean) => {
        dispatch(setScrapped(newScrapped));
    };

    const updateCommentCount = (newCommentCount: number) => {
        dispatch(setCommentCount(newCommentCount));
    };

    const updateCommentList = (newCommentList: Comment[]) => {
        dispatch(setCommentList(newCommentList));
    }

    return {
        updatePost,
        updatePostId,
        updateTitle,
        updateContent,
        updateUserId,
        updateProfile,
        updateNickname,
        updateUploadTime,
        updateHit,
        updateLikeCount,
        updateLiked,
        updateScrapped,
        updateCommentCount,
        updateCommentList,
    };
}

export default usePostUpdate;