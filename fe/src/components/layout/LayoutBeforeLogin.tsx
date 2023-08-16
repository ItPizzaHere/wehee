import React from 'react';
import HeaderBeforeLogin from 'components/layout/HeaderBeforeLogin';

interface LayoutBeforeLoginProps {
  children: React.ReactNode;
}

function LayoutBeforeLogin({children}: LayoutBeforeLoginProps) {

  return (
    <div>
      <HeaderBeforeLogin />
      {children}
    </div>
  );
}

export default LayoutBeforeLogin;