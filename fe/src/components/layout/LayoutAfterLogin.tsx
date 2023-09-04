import React from 'react';
import { Container } from '@mui/material';
import HeaderAfterLogin from 'components/layout/HeaderAfterLogin';
import Footer from 'components/layout/Footer';

interface LayoutAfterLoginProps {
  children?: React.ReactNode;
}

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const layoutContainerStyle: React.CSSProperties = {
  flex: 1,
};

function LayoutAfterLogin({ children }: LayoutAfterLoginProps) {
  return (
    <div style={layoutStyle}>
      <HeaderAfterLogin />
      <Container maxWidth="xl" style={layoutContainerStyle}>
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default LayoutAfterLogin;
