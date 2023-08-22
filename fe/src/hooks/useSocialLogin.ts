import authService from 'services/authService';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserFirst, resetUser } from 'redux/userSlice';
import useCustomNavigate from './useCustomNavigate';
import useUserUpdate from './useUserUpdate';
import { setProviderId } from 'redux/authSlice';


const useSocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useCustomNavigate();
  const { updateUserSign } = useUserUpdate();

  const fetchUserData = async (accessToken: string) => {
    try {
      const response = await authService.get('/api/v1/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const setAccessTokenCookie = async (accessToken: string) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // 예: 7일 후 만료

    Cookies.set('accessToken', accessToken, {
      expires: expirationDate,
      path: '/',
    });

    await new Promise(resolve => setTimeout(resolve, 100));
  };
  const handleLogin = async (providerId: string) => {
    const redirectUri = encodeURIComponent('http://localhost:3000/oauth/redirect');
    window.location.href = `http://localhost:8080/oauth2/authorization/${providerId}?redirect_uri=${redirectUri}`;
  };

  const handleLoginCallback = async (accessToken: string) => {
    if (accessToken) {
      try {
        await setAccessTokenCookie(accessToken);
        console.log(accessToken);

        const userResponseDto = await fetchUserData(accessToken);
        const user = userResponseDto.body.user;

        const userData = {
          userSign: false,
          userId: user.userId,
          providerId: user.providerId,
          nickname: user.nickname,
          profile: user.profile,
          mbti: user.mbti,
          birth: user.birth,
          gender: user.gender,
          duplicate: false,
        };

        dispatch(setUserFirst(userData));

        if (userData.mbti !== "NONE") {
          updateUserSign(true);
          navigate.handleMainNavigate();
          window.location.reload();
        } else { // mbti == 'NONE'
          dispatch(setProviderId(user.providerId));
          navigate.handleAddInfoNavigate();
        }
      } catch (error) {
        throw error;
      }
    } else {
      // 액세스 토큰이 없는 경우 처리
    }
  };

  const handleLogout = () => {
    Cookies.remove('accessToken');
    dispatch(resetUser());
    navigate.handleMainNavigate();
  };


  return { handleLogin, handleLoginCallback, handleLogout };
};

export default useSocialLogin;
