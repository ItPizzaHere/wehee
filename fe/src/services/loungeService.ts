import axiosInstance from "./axiosInstance";

const loungeService = axiosInstance();

const listPost = async() => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/list');
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

const getPost = async(postId : number) => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/view?postId='+postId);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  const listHotPost = async() => {
    try {
      const response = await loungeService.post('api/v1/lounge/hot/list');
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const listMyPost = async() => {
    try {
      const response = await loungeService.post('api/v1/lounge/my/post');
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const listScrap = async() => {
    try {
      const response = await loungeService.post('api/v1/lounge/my/scrap');
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const listMyCommentedPost = async() => {
    try {
      const response = await loungeService.post('api/v1/lounge/my/comment');
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addPost = async(postData: any) => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/write', postData);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const editPost = async(postData: any) => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/edit', postData);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addComment = async(commentData: any) => {
    try {
      const response = await loungeService.post('api/v1/lounge/comment/write', commentData);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const distributeLike = async(postId : number) => {
    try {
      const response = await loungeService.post('api/v1/lounge/like?postId='+postId);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const distributeScrap = async(postId : number) => {
    try {
      const response = await loungeService.post('api/v1/lounge/scrap?postId='+postId);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const deletePost = async(postId : number) => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/remove?postId='+postId);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const search = async(keyword : string) => {
    try {
      const response = await loungeService.post('api/v1/lounge/post/search?keyword='+keyword);
      return response.data.body.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


export {getPost, listPost, listHotPost, listMyPost, listScrap, listMyCommentedPost, addPost, addComment, distributeLike, distributeScrap, deletePost, editPost, search}
export default loungeService