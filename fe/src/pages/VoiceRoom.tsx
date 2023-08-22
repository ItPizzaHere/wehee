import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container} from '@mui/material';
import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import VoiceRoomHome from 'components/voiceroom/VoiceRoomHome';
import VoiceRoomView from 'components/voiceroom/VoiceRoomView';
import VoiceRoomEnd from 'components/voiceroom/VoiceRoomEnd';
import VoiceRoomViewHost from 'components/voiceroom/VoiceRoomViewHost';

function VoiceRoom() {
  return (
    <div>
      <LayoutAfterLogin>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/*" element={<VoiceRoomHome />} />
            <Route path="/view" element={<VoiceRoomView />} />
            <Route path="/onair" element={<VoiceRoomViewHost />} />
            <Route path="/end" element={<VoiceRoomEnd />} />
          </Routes>
        </Container>
      </LayoutAfterLogin>
    </div>
  );
}

export default VoiceRoom;