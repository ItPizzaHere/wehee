import axiosInstance from './axiosInstance';

const chatService = axiosInstance();

interface ChatInfo {
  title: string;
  category: string;
  limit: number;
  mbtis: string[];
  gender: string;
  minAge: number;
  maxAge: number;
}

const checkChatCreation = async () => {
  try {
    const response = await chatService.get(`api/v1/chat/check`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const findMyChatRooms = async () => {
  try {
    const response = await chatService.get(`api/v1/mychat`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const getChatInfo = async (chatId: string) => {
  try {
    const response = await chatService.get(`api/v1/mychat/${chatId}`);
    return response.data.body;
  } catch (error) {
    throw error;
  }
}

const getMessages = async (chatId: string) => {
  try {
    const response = await chatService.get(`api/v1/mychat/messages/${chatId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const sendMessage = async (chatRoomId: string, message: string) => {
  try {
    const response = await chatService.put(`api/v1/mychat/messages/${chatRoomId}`, { chatRoomId, message });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postNewChat = async (chatInfo: ChatInfo) => {
  try {
    const response = await chatService.post(`api/v1/chat`, chatInfo);
    return response;
  } catch(error) {
    throw error;
  }
}

const getOnChatList = async (keyword?: string, categories?: string[]) => {
  try {
    let queryParts = [];

    if (keyword) {
      queryParts.push(`keyword=${keyword}`);
    }
    if (categories && categories.length > 0) {
      queryParts = queryParts.concat(categories.map((category) => `category=${category}`));
    }

    const query = queryParts.join('&');
    console.log("쿼리 문자열:", query); 
    
    const response = await chatService.get(`api/v1/loveonchat${query ? '?' + query : ''}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

export { 
  ChatInfo,
  checkChatCreation, postNewChat,
  getOnChatList, findMyChatRooms, getChatInfo, getMessages, sendMessage
};
export default chatService;