import React from 'react';
import { Container } from '@mui/material';
import HeaderAfterLogin from './HeaderAfterLogin';

interface LayoutAfterLoginHideFooterProps {
  children?: React.ReactNode;
}

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const layoutContainerStyle: React.CSSProperties = {
  flex: 1,
  height: 'calc(100vh - 80px)',
  overflowY: 'auto'
};

function LayoutAfterLoginHideFooter({ children }: LayoutAfterLoginHideFooterProps) {
  return (
    <div style={layoutStyle}>
      <HeaderAfterLogin />
      <Container maxWidth="xl" style={layoutContainerStyle}>
        {children}
      </Container>
    </div>
  );
}

export default LayoutAfterLoginHideFooter;
