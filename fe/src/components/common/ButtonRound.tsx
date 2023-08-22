import React from 'react';
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material';
import { bold } from 'styles/fontStyle';

interface ButtonRoundProps {
  label: string;
  color?: 'primary' | 'secondary' | 'info';
  fontColor?: '#ffffff' | '#968AE1';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function ButtonRound({label, color, fontColor, onClick, disabled}: ButtonRoundProps) {
  return (
    <Fab
      variant='extended'
      color={color}
      onClick={onClick}
      size='large'
      disabled={disabled}
    >
      <Typography style={bold} color={fontColor} fontWeight="800">{label}</Typography>
    </Fab>
  );
}

export default ButtonRound;