import React from 'react';
import Button from '@mui/material/Button';

interface ButtonHasIconProps {
  icon: React.ReactNode;
  label: string;
  variant: 'contained' | 'outlined' ;
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function ButtonHasIcon({icon, label, variant, color, onClick, disabled}: ButtonHasIconProps) {
  return (
    <Button
      startIcon={icon}
      variant={variant}
      color={color}
      onClick={onClick}
      size='large'
      disabled={disabled}
      >
      {label}
    </Button>
  );
}

export default ButtonHasIcon;