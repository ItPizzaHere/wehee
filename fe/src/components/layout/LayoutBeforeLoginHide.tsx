import React from 'react';
import HeaderBeforeLogin from 'components/header/HeaderBeforeLogin';

interface LayoutBeforeLoginProps {
  children: React.ReactNode;
}

function LayoutBeforeLogin({children}: LayoutBeforeLoginProps) {

  return (
    <div>
      <HeaderBeforeLogin hide={true} />
      {children}
    </div>
  );
}

export default LayoutBeforeLogin;
