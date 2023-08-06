import React from 'react';
import { Container } from '@mui/material';
import HeaderAfterLogin from './HeaderAfterLogin';
import Footer from './Footer';

interface LayoutAfterLoginProps {
  children?: React.ReactNode;
}

function LayoutAfterLogin({ children }: LayoutAfterLoginProps) {
  return (
    <div>
      <HeaderAfterLogin />
      <Container maxWidth="xl">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default LayoutAfterLogin;
