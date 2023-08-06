import React from 'react';
import Button from '@mui/material/Button';

interface ButtonBasicProps {
  label: string;
  variant: 'contained' | 'outlined' ;
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonBasic({label, variant, color, onClick}: ButtonBasicProps) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ButtonBasic;