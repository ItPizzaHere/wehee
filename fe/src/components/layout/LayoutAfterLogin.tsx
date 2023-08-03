import React from 'react';
import { Container } from '@mui/material';
import HeaderAfterLogin from 'components/header/HeaderAfterLogin';

interface LayoutAfterLoginProps {
  children: React.ReactNode;
}

function LayoutAfterLogin({children}: LayoutAfterLoginProps) {

  return (
    <div>
      <HeaderAfterLogin />
      <Container maxWidth="md" sx={{backgroundColor: 'pink'}}>
        {children}
      </Container>
    </div>
  );
}

export default LayoutAfterLogin;
