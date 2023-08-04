import React from 'react';
import Fab from '@mui/material/Fab';

interface ButtonRoundProps {
  label: string;
  color?: 'primary' | 'secondary' | 'info';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonRound({label, color, onClick}: ButtonRoundProps) {
  return (
    <Fab
      variant='extended'
      color={color}
      onClick={onClick}
      size='large'
    >
      {label}
    </Fab>
  );
}

export default ButtonRound;