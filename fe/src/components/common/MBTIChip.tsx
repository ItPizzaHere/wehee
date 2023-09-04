import React from 'react';
import { Chip } from '@mui/material';

interface MBTIChipProps {
  label: string;
  selected: boolean;
  color: string;
  onClick?: () => void;
}

function MBTIChip({label, selected, color, onClick}: MBTIChipProps) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      variant={selected ? 'filled' : 'outlined'}
      style={{
        borderColor: selected ? 'transparent' : color,
        borderWidth: selected ? 0 : '2px',
        backgroundColor: selected ? color : 'transparent',
      }}
      sx={{ color: selected ? '#FFFFFF' : color }}
    />
  );
};

export default MBTIChip;
