import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { black } from 'styles/fontStyle'
import { Box, Stack, Typography } from '@mui/material';
import { findMyChatRooms } from 'services/chatService';
import ChatListItem from './ChatListItem';

interface chatListInfo {
  category: string;
  id: string;
  joined: number;
  lastMessage: string;
  lastMessageSent: string;
  limit: number;
  title: string;
}
function ChatList() {
  const [list, setList] = useState<chatListInfo[]>([])
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findMyChatRooms();
        console.log(data);
        setList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Stack>
        <Box sx={{ paddingX: 1, paddingY: 2 }}>
          <Typography style={black} sx={{ fontSize: '1.8rem', color: '#716FDC' }}>채팅</Typography>
        </Box>
        <Stack>
          {list.map(item => (
            <ChatListItem
              category={item.category}
              personnel={item.joined}
              limit={item.limit}
              title={item.title}
              message={item.lastMessage}
              time={item.lastMessageSent}
              chatId={item.id}
            />
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

export default ChatList;