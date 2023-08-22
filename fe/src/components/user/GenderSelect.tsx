import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useUserUpdate from '../../hooks/useUserUpdate';
import { FormControlLabel, RadioGroup, Radio, Box } from '@mui/material';

function GenderSelect() {
  const user = useSelector((state: RootState) => state.user);
  const { updateGender } = useUserUpdate();
  const [selectedValue, setSelectedValue] = React.useState('');

  useEffect(() => {
    if (user.gender !== "NONE") {// 성별 정보가 Redux 스토어에 있을 경우 초기 값으로 설정
      setSelectedValue(user.gender);
    }
  }, [user.gender]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGender = event.target.value;
    updateGender(newGender);
  };
  return (
    <Box>
      <RadioGroup row value={selectedValue} onChange={handleGenderChange}>
        <FormControlLabel value="MALE" control={<Radio />} label="남" />
        <FormControlLabel value="FEMALE" control={<Radio />} label="여" />
      </RadioGroup>
    </Box>
  );
}

export default GenderSelect;