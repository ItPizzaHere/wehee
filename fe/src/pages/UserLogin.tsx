import * as React from 'react';
import HeaderBeforeLogin from 'components/header/HeaderBeforeLogin';
import SocialLoginWindow from 'components/user/SocialLoginWindow';

function UserLogin() {
  return (
    <div>
      <HeaderBeforeLogin hide={true} />
      <SocialLoginWindow />
    </div>
  );
}

export default UserLogin;