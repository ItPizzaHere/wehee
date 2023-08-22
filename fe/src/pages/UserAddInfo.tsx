import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useUserUpdate from '../hooks/useUserUpdate';
import useCustomNavigate from 'hooks/useCustomNavigate';
import { updateUserInfo } from 'services/authService';
import { Box, Stack, Grid, ListItem, Typography } from '@mui/material';
import LayoutBeforeLogin from 'components/layout/LayoutBeforeLoginHide';
import MBTISelect from 'components/user/MBTISelect'
import NicknameField from 'components/user/NicknameField'
import GenderSelect from 'components/user/GenderSelect';
import BirthField from 'components/user/BirthField';
import { addInfoTitle } from 'styles/fontStyle';
import { backgroundStyle, svgWStyle, svgHStyle } from 'styles/userStyle';
import svgW from '../assets/w.svg';
import svgH from '../assets/h.svg';
import ButtonRound from 'components/common/ButtonRound';

function UserAddInfo() {
  const user = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);
  const mbti = useSelector((state: RootState) => state.mbti);
  const { updateUserSign, updateNickname, updateMBTI } = useUserUpdate();
  const { handleMainNavigate } = useCustomNavigate();

  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

  useEffect(() => { updateMBTI(""); }, []);
  
  useEffect(() => {
    const isNicknameChecked = !user.duplicate;
    const isMBTISelected = mbti.chipData.some(chip => chip.selected);
    const isGenderSelected = user.gender !== "";
    const isBirthSelected = user.birth !== "0";

    setIsSubmitButtonEnabled(isNicknameChecked && isMBTISelected && isGenderSelected && isBirthSelected);

    if (!user.duplicate) {
      updateNickname(user.nickname);
    }


    const selectedMBTI = mbti.chipData.find(chip => chip.selected); // 선택된 MBTI 업데이트 및 user.mbti에 라벨 입력
    if (selectedMBTI) {
      updateMBTI(selectedMBTI.label);
    }
  }, [user.nickname, user.duplicate, mbti.chipData, user.gender, user.birth]);

  const handleSignUp = async () => {
    if (isSubmitButtonEnabled) {
      try {
        const userInfo = {
          providerId: auth.providerId,
          nickname: user.nickname,
          mbti: user.mbti,
          gender: user.gender,
          birth: user.birth,
        };

        await updateUserInfo(userInfo);

        updateUserSign(true);
        handleMainNavigate();
        window.location.reload();
      } catch (error) {
        console.error('회원가입 정보 업데이트 에러:', error);
      }
    }
  };

  return (
    <div>
      <LayoutBeforeLogin>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.94);',
              marginTop: '64px',
              padding: '24px 36px',
              borderRadius: '10px',
              boxShadow: '0px 0px 10px 5px rgba(144, 144, 144, 0.25)',
            }}
          >
            <Stack spacing={1}>
              <ListItem>
                <Box width='330px' display="flex" justifyContent="center" alignItems="center">
                  <Typography style={addInfoTitle}>거의 다왔어요!</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box width='330px' display="flex" justifyContent="center" alignItems="center">
                  <Stack spacing={1.5}>
                    <Box>
                      <Typography gutterBottom>닉네임</Typography>
                      <NicknameField />
                    </Box>
                    <Box>
                      <Typography gutterBottom>MBTI</Typography>
                      <MBTISelect />
                    </Box>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={6}>
                        <Typography gutterBottom>성별</Typography>
                        <GenderSelect />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>태어난 연도</Typography>
                        <BirthField />
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </ListItem>
              <ListItem>
                <Box width='330px' display="flex" justifyContent="center" alignItems="center">
                  <ButtonRound
                    label='회원가입 완료' color='primary' fontColor='#ffffff'
                    onClick={handleSignUp}
                    disabled={!isSubmitButtonEnabled}
                  />
                </Box>
              </ListItem>
            </Stack>
          </Box>
        </Box>
      </LayoutBeforeLogin>
      <div style={backgroundStyle}>
        <img src={svgW} alt="back w" width='320px' height='320px' style={svgWStyle} />
        <img src={svgH} alt="back h" width='320px' height='320px' style={svgHStyle} />
      </div>
    </div>
  );
}

export default UserAddInfo;