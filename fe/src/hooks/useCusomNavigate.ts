import { useNavigate } from 'react-router-dom';

export function useCustomNavigate() {
  const navigate = useNavigate();

  const handleMainNavigate = () => {
    navigate('/');
  };

  const handleLoginNavigate = () => {
    navigate('/login');
  };
  
  const handleJoinNavigate = () => {
    navigate('/Join');
  };

  return {
    handleMainNavigate,
    handleLoginNavigate,
    handleJoinNavigate,
  };
}