import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import React from 'react';

function Home() {
  return (
    <div>
      <LayoutAfterLogin>
        <h1>Hello, User!</h1>
        {/* 로그인 후 보여줄 내용 작성 */}
      </LayoutAfterLogin>
    </div>
  );
}

export default Home;
