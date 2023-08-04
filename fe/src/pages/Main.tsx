import React from 'react';
import HeaderBeforeLogin from 'components/header/HeaderBeforeLogin';

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
      <HeaderBeforeLogin />
      <h1>Welcome to Wehee!</h1>
      {/* 로그인 폼 등 필요한 내용 작성 */}
    </div>
  );
}

export default Main;
