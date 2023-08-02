import React from 'react';

function BeforeLogin() {
  const style = {
    backgroundColor: '#A498ED',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={style}>
      <h1>Welcome to our website!</h1>
      {/* 로그인 폼 등 필요한 내용 작성 */}
    </div>
  );
}

export default BeforeLogin;
