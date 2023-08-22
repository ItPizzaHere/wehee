import React from 'react';
import { Box, Typography } from '@mui/material';
import { regular } from 'styles/fontStyle';

interface MsgSentProps {
  content: string;
  timestamp: string;
}

function MsgSent({ content, timestamp }: MsgSentProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <Box paddingRight={1.5}>
        <Typography style={{ ...regular, fontSize: "0.95rem", color: "#757575" }}>
          {timestamp}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "70%", backgroundColor: "#716FDC", borderRadius: "10px", padding: 2 }}>
        <Typography style={{ ...regular, fontSize: "1.15rem", color: "#fff" }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

export default MsgSent;
