import axios from 'axios';

const BE_URL = 'http://localhost:8080';
const authService = axios.create({
  baseURL: BE_URL,
  timeout: 10000,
});

const login = async (providerId: string, redirectUri: string) => {
  try {
    const response = await authService.get(`/oauth2/authorization/${providerId}`, {
      params: { redirect_uri: redirectUri },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login };

export default authService;
