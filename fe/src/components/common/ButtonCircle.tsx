import React from 'react';
import Fab from '@mui/material/Fab';

interface ButtonCircleProps {
  icon: React.ReactNode;
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonCircle({icon, color, onClick}: ButtonCircleProps) {
  return (
    <Fab
      color={color}
      onClick={onClick}
      >
      {icon}
    </Fab>
  );
}

export default ButtonCircle;