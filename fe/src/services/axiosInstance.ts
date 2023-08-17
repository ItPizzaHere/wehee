import axios  from 'axios'; // AxiosInstance 타입 추가
import Cookies from 'js-cookie';

const axiosInstance = () => {
  const accessToken = Cookies.get('accessToken');
  console.log(accessToken);

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  return instance;
};

export default axiosInstance;