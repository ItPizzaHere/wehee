import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import './styles/App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectRoutes from 'routes/redirectRoutes';
import MainAfterLogin from 'pages/MainAfterLogin';
import MainBeforeLogin from 'pages/MainBeforeLogin';
import UserLogin from 'pages/UserLogin';
import UserJoin from 'pages/UserJoin';
import UserAddInfo from 'pages/UserAddInfo';
import UserMyPage from 'pages/UserMyPage';
import Board from 'pages/Board';
import OnChat from 'pages/OnChat';
import VoiceRoom from 'pages/VoiceRoom';
import Chat from 'pages/Chat';
import Fallback from 'pages/Fallback';
import FallbackNotSign from 'pages/FallbackNotSign';

const App = () => {
  const userSign = useSelector((state: RootState) => state.user.userSign);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={userSign ? <MainAfterLogin /> : <MainBeforeLogin />} />

          <Route path="/login" element={!userSign ? <UserLogin /> : <Fallback />} />
          <Route path="/join" element={!userSign ? <UserJoin /> : <Fallback />} />
          <Route path="/addInfo" element={!userSign ? <UserAddInfo /> : <Fallback />} />

          <Route path="/mypage" element={userSign ? <UserMyPage /> : <FallbackNotSign />} />
          <Route path="/board/*" element={userSign ? <Board /> : <FallbackNotSign />} />
          <Route path="/love-on-chat/*" element={userSign ? <OnChat /> : <FallbackNotSign />} />
          <Route path="/voiceroom/*" element={userSign ? <VoiceRoom /> : <FallbackNotSign />} />
          <Route path="/chat/*" element={userSign ? <Chat /> : <FallbackNotSign />} />

        </Routes>
        <RedirectRoutes />
      </Router>
    </ThemeProvider >

  );
}

export default App;