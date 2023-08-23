import React from 'react';
import Button from '@mui/material/Button';

interface ButtonBasicProps {
  label: string;
  variant: 'contained' | 'outlined' ;
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: 'large';
  sx?: object;
  type?: "submit";
}

function ButtonBasic({label, variant, color, onClick, disabled, size, sx}: ButtonBasicProps) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={sx}
    >
      {label}
    </Button>
  );
}

export default ButtonBasic;