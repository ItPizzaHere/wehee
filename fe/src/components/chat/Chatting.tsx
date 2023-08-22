import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import MsgReceived from 'components/chat/MsgReceived';
import MsgSent from 'components/chat/MsgSent';
import { Grid } from '@mui/material';
import fav from 'assets/favicon.svg';

function Chatting() {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const userNickname = useSelector((state: RootState) => state.user.nickname);
  const userMbti = useSelector((state: RootState) => state.user.mbti);

  const currentUser = userNickname + ' #' + userMbti;

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      <Grid container spacing={2} direction="column">
        {messages.map((msg, index) => {
          const isSentByCurrentUser = msg.writer.nickname === currentUser;
          const profileImg = msg.writer.profile === 'SystemUser' ? fav : msg.writer.profile;

          return (
            <Grid key={index} item container justifyContent={isSentByCurrentUser ? "flex-end" : "flex-start"}>
              {isSentByCurrentUser ? (
                <MsgSent
                  content={msg.content}
                  timestamp={msg.timestamp}
                />
              ) : (
                <MsgReceived
                  profile={profileImg}
                  nickname={msg.writer.nickname}
                  content={msg.content}
                  timestamp={msg.timestamp}
                />
              )}
            </Grid>
          );
        })}
        <div ref={messagesEndRef} />
      </Grid>
    </div>
  );
}

export default Chatting;
