import React from 'react';
import Button from '@mui/material/Button';

interface ButtonTextProps {
  label: string;
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonText({label, color = '#303030', onClick}: ButtonTextProps) {
  return (
    <Button
      variant='text'
      size='large'
      sx={{ color: color, display: 'block', fontSize: '1.15rem'}}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ButtonText;