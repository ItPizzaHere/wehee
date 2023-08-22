import React from 'react';
import { Chip } from '@mui/material';
import { Favorite } from '@mui/icons-material';

interface CategoryChipProps {
  label: string;
  selected: boolean;
  onClick?: () => void;
}

function CategoryChip({ label, selected, onClick }: CategoryChipProps) {
  return (
    <Chip
      icon={selected ? <Favorite style={{color: '#698AFF', fontSize: '1.15rem', paddingRight: 1}} /> : <></>} // 선택된 경우에만 체크 아이콘 표시
      label={label}
      onClick={onClick}
      variant='outlined'
      style={{
        borderColor: selected ? '#698AFF' : '#757575',
        borderWidth: '1.5px',
        backgroundColor: 'transparent',
      }}
      sx={{
        color: selected ? '#698AFF' : '#757575',
        width: 96, height: 40, fontSize: '1rem', borderRadius: 100,
        fontFamily: selected ? 'pretendard-Regular' : ''
      }}
    />
  );
};

export default CategoryChip;
