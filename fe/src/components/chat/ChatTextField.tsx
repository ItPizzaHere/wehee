import React, { useState } from 'react';
import { useParams } from 'react-router';
import { sendMessage, getMessages } from 'services/chatService';
import useChatUpdate from '../../hooks/useChatUpdate';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { SendRounded } from '@mui/icons-material';

interface ServerMessage {
  message: string;
  timestamp: string;
  userProfile: {
    id: string;
    nickname: string;
    profile: string;
  };
}

function ChatTextField() {
  const [message, setMessage] = useState('');
  const { chatId: currentChatId } = useParams<{ chatId: string }>();
  const { updateMessages } = useChatUpdate();

  const handleSendMessage = () => {
    if (currentChatId) {
      sendMessage(currentChatId, message)
        .then(response => {
          console.log('Message sent:', message);
          setMessage('');
  
          // 메시지 전송 성공 후에 메시지 목록을 갱신
          return getMessages(currentChatId);
        })
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
        .catch(error => {
          console.error('Message sending or updating failed:', error);
        });
    } else {
      console.error("chatId 값이 없습니다.");
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="메시지를 입력하세요..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSendMessage}>
              <SendRounded style={{ fontSize: "2rem", color: "#968AE1" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default ChatTextField;