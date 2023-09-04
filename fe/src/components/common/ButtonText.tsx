import React from 'react';
import Button from '@mui/material/Button';

interface ButtonTextProps {
  label: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selectedPage?: string;
}

function ButtonText({label, color = '#303030', selectedPage, onClick}: ButtonTextProps) {
  const buttonColor = selectedPage === label ? '#716FDC' : color;

  return (
    <Button
      variant='text'
      size='large'
      sx={{ color: buttonColor, display: 'block', fontSize: '1.15rem'}}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ButtonText;