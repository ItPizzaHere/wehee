import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { Stack, Typography } from '@mui/material';
import { Create } from '@mui/icons-material';
import ButtonHasIcon from 'components/common/ButtonHasIcon';
import { black } from 'styles/fontStyle';

function BoardHeader() {
  const mbti = useSelector((state: RootState) => state.user.mbti);

  const { handleBoardWriteNavigate } = useCustomNavigate();

  return (
    <Stack direction="row" alignItems="center" spacing="auto" sx={{ paddingY: 2 }}>
      <Typography style={black} sx={{ fontSize: '2.45rem', color: '#716FDC' }}>
        {mbti}
      </Typography>
      <ButtonHasIcon
        icon={<Create />}
        label="새 글"
        variant="contained"
        color="primary"
        onClick={handleBoardWriteNavigate}
      />
    </Stack>
  );
}

export default BoardHeader;