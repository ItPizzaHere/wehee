import React from 'react';
import LayoutBeforeLogin from 'components/layout/LayoutBeforeLogin';

function Main() {

  const MainStyle = {
    backgroundColor: '#A498ED',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={MainStyle}>
      <LayoutBeforeLogin>
        <h1>Welcome to Wehee!</h1>
        {/* 로그인 폼 등 필요한 내용 작성 */}
      </LayoutBeforeLogin>
    </div>
  );
}

export default Main;
