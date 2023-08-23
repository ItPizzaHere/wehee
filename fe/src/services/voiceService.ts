import axiosInstance from "./axiosInstance";

const voiceService = axiosInstance();

interface VoiceInfo {
  title: string;
  description: string;
  limit: number;
}

const postNewVoice = async (voiceInfo: VoiceInfo) => {
  try {
    const response = await voiceService.post(`api/v1/voice/create`, voiceInfo);
    return response;
  } catch (error) {
    throw error;
  }
}

const getVoiceList = async (keyword?: string) => {
  try {
    let query = '';
    if (keyword) {
      query += `keyword=${keyword}`;
    }
    const response = await voiceService.get(`api/v1/voice/search${query ? '?' + query : ''}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const getVoiceInfo = async (room_id: bigint) => {
  try {
    const response = await voiceService.get(`api/v1/voice/info/${room_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// const getVoiceUserInfo = async () => {
//   try {
//     const response = await 
//   } catch (error) {
//     throw error;
//   }
// }

export {
  VoiceInfo,
  postNewVoice,
  getVoiceList,
  getVoiceInfo,
  // getVoiceUserInfo
};
export default voiceService;