import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { toggleChip } from 'redux/mbtiSlice';
import { Box, styled } from '@mui/material'
import MBTIChip from 'components/common/MBTIChip';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function MBTISelect() {
  const chipData = useSelector((state: RootState) => state.mbti.chipData);
  const dispatch = useDispatch();

  const handleToggle = (chipToToggleKey: number) => () => {
    dispatch(toggleChip(chipToToggleKey));
  };

  return (
    <Box
      sx={{
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 1,
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem key={data.key}>
          <MBTIChip
            label={data.label}
            selected={data.selected}
            color={data.color}
            onClick={handleToggle(data.key)}
          />
        </ListItem>
      ))}
    </Box>
  );
}

export default MBTISelect;