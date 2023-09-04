import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSocialLogin from '../../hooks/useSocialLogin';
import LoadingSpinner from 'components/common/LoadingSpinner';

const OAuthRedirectHandler = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('token'); // 액세스 토큰 추출
  const { handleLoginCallback } = useSocialLogin();

  useEffect(() => {
    if (accessToken) {
      handleLoginCallback(accessToken);
    }
  }, [accessToken, handleLoginCallback]);

  return <LoadingSpinner />; 
};

export default OAuthRedirectHandler;
