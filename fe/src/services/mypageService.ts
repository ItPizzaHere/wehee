import axiosInstance from "./axiosInstance";

const mypageService = axiosInstance();

const getCanModify = async () => {
  try {
    const response = await mypageService.get('api/v1/users/mypage');
    console.log(response.data.body.result);
    return response.data.body.result;
  } catch (error) {
    throw(error);
  }
}

const updateNickname = async (nickname: string) => {
  try {
    const response = await mypageService.put('api/v1/users/update-nickname', nickname, {
        headers: {
          'Content-Type': 'text/plain'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateMbti = async (mbti: string) => {
  try {
    const response = await mypageService.put('api/v1/users/mbti', mbti, {
      headers: {
        'Content-Type' : 'text/plain'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBirth = async (birth: string) => {
  try {
    const response = await mypageService.put('api/v1/users/birth', birth, {
      headers: {
        'Content-Type' : 'text/plain'
      }
  });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateGender = async (gender: string) => {
  try {
    const response = await mypageService.put('api/v1/users/gender', gender, {
      headers: {
        'Content-Type' : 'text/plain'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const checkUpdateAvailability =async (updateType: string) => {
  try {
    const response = await mypageService.get('api/v1/users/mypage', {
      params: {
        updateType: updateType,
      },
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
  
};

const withdrawUser =async () => {
  try {
    const response = await mypageService.post('api/v1/users/withdraw');
    return response.data;
  } catch (error) {
    throw error;
  }  
};


export { getCanModify, updateNickname, updateMbti, updateBirth, updateGender, checkUpdateAvailability, withdrawUser }
export default mypageService