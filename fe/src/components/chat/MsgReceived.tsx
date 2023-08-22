import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';
import { regular } from 'styles/fontStyle';

interface MsgReceivedProps {
  profile: string;
  nickname: string;
  content: string;
  timestamp: string;
}
function MsgReceived({ profile, nickname, content, timestamp }: MsgReceivedProps) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ flexGrow: 1 }}>
      <Avatar src={profile} sx={{ width: 40, height: 40 }} />
      <Stack direction="row" spacing={1.5} sx={{ width: '100%' }} alignItems="flex-end"> {/* 너비를 남은 공간에 꽉 차게 */}
        <Box maxWidth="70%">
          <Box sx={{ backgroundColor: "#EDEDED", borderRadius: "10px", padding: 2, display: "inline-block" }}>
            <Typography style={{ ...regular, fontSize: "1.15rem", color: "#303030" }}>
              {content}
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1}>
          <Typography style={{ ...regular, fontSize: "0.95rem", color: "#757575" }}>{nickname} </Typography>
          <Typography style={{ ...regular, fontSize: "0.95rem", color: "#757575" }}>•</Typography>
          <Typography style={{ ...regular, fontSize: "0.95rem", color: "#757575" }}>{timestamp}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MsgReceived;