import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Person } from 'redux/chatSlice';
import { setPage } from 'redux/selectedPageSlice';
import useChatUpdate from '../../hooks/useChatUpdate';
import { getChatInfo, getMessages } from 'services/chatService';
import { Container, Box } from '@mui/material';
import ChatHeader from 'components/chat/ChatHeader';
import ChatPeopleList from 'components/chat/ChatPeopleList';
import Chatting from 'components/chat/Chatting';
import ChatTextField from 'components/chat/ChatTextField';
import { scrollStyle } from 'styles/scroll';

interface UserFromServer {
  id: string;
  nickname: string;
  profile: string;
}

interface ServerMessage {
  message: string;
  timestamp: string;
  userProfile: {
    id: string;
    nickname: string;
    profile: string;
  };
}

function ChatRoom() {
  const { chatId: currentChatId } = useParams<{ chatId: string }>();
  const dispatch = useDispatch();

  const chatState = useSelector((state: RootState) => state.chat);
  const { updateChatInfo, updateMessages } = useChatUpdate();

  useEffect(() => {
    dispatch(setPage('chat'));

    if (currentChatId) {
      getChatInfo(currentChatId).then(info => {
        const people: Person[] = info.chatroom.users.map((user: UserFromServer) => ({
          profile: user.profile,
          nickname: user.nickname
        }));

        const chatInfo = {
          id: info.chatroom.id,
          title: info.chatroom.title,
          category: info.chatroom.category,
          limit: info.chatroom.limit,
          personnel: info.chatroom.joined,
          people,
        };

        updateChatInfo(chatInfo);
      }).catch(error => {
        throw error;
      });

      getMessages(currentChatId).then(messages => {
        console.log('Messages:', messages); // 여기서 메시지 정보를 로그로 출력

        const mappedMessages = messages.map((msg: ServerMessage) => ({
          content: msg.message,
          writer: {
            profile: msg.userProfile.profile,
            nickname: msg.userProfile.nickname,
          },
          timestamp: msg.timestamp,
        }));
        console.log(mappedMessages);
        updateMessages(mappedMessages);

      }).catch(error => {
        throw error;
      });
    } else {
      console.error("chatId 값이 없습니다.");
    }

  }, [dispatch]);

  useEffect(() => {
    if (currentChatId) {
      const interval = setInterval(() => {
        getMessages(currentChatId)
          .then(messages => {
            const mappedMessages = messages.map((msg: ServerMessage) => ({
              content: msg.message,
              writer: {
                profile: msg.userProfile.profile,
                nickname: msg.userProfile.nickname,
              },
              timestamp: msg.timestamp,
            }));
            updateMessages(mappedMessages);
          })
          .catch(error => console.error('Error getting messages:', error));
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentChatId, updateMessages]);

  useEffect(() => {
    if (currentChatId) {
      const chatInfoInterval = setInterval(() => {
        getChatInfo(currentChatId).then(info => {
          const people: Person[] = info.chatroom.users.map((user: UserFromServer) => ({
            profile: user.profile,
            nickname: user.nickname
          }));
  
          const chatInfo = {
            id: info.chatroom.id,
            title: info.chatroom.title,
            category: info.chatroom.category,
            limit: info.chatroom.limit,
            personnel: info.chatroom.joined,
            people,
          };
  
          updateChatInfo(chatInfo);
        }).catch(error => {
          console.error("Error getting chat info:", error);
        });
      }, 60000);
  
      return () => {
        clearInterval(chatInfoInterval);
      };
    }
  }, [currentChatId, updateChatInfo]);

  return (
    <div>
      <Container style={{ height: 'calc(100vh - 108px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <ChatHeader
          category={chatState.category}
          title={chatState.title}
          personnel={chatState.personnel}
          limit={chatState.limit}
        />
        <ChatPeopleList people={chatState.people} />
        <Box flex={1} overflow="auto" sx={{ ...scrollStyle, paddingX: 1.5, paddingY: 2 }}>
          <Chatting />
        </Box>
        <ChatTextField />
      </Container>
    </div>
  );
}

export default ChatRoom;