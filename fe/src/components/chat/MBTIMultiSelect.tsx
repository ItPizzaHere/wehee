import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { selectChip } from 'redux/mbtiSlice';
import useChatCreateUpdate from 'hooks/useChatCreateUpdate';
import { Box, styled } from '@mui/material';
import MBTIChip from 'components/common/MBTIChip';
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function MBTIMultiSelect() {
  const dispatch = useDispatch();

  const chipData = useSelector((state: RootState) => state.mbti.chipData);
  const { updateSelectedMBTI } = useChatCreateUpdate();

  const handleToggle = (chipToToggleKey: number) => () => {
    dispatch(selectChip(chipToToggleKey));
  };

  useEffect(() => {
    const selectedChips = chipData.filter(chip => chip.selected);
    const selectedLabels = selectedChips.map(chip => chip.label);

    if (selectedChips.length <= 3) {
      updateSelectedMBTI(selectedLabels);
    }
  }, [chipData]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 1,
      }}
      component="ul"
    >
      {chipData.map((data, index) => (
        <ListItem key={data.key}>
          <MBTIChip
            label={data.label}
            selected={data.selected}
            color={data.color}
            onClick={handleToggle(index)}
          />
        </ListItem>
      ))}
    </Box>
  );
}

export default MBTIMultiSelect;