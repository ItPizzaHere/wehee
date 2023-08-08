import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import React from 'react';

function Home() {
  return (
    <div>
      <LayoutAfterLogin>
        <h1> Hello, User </h1>
      </LayoutAfterLogin>
    </div>
  );
}

export default Home;
