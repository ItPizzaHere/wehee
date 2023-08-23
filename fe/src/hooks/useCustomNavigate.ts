import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleMainNavigate = () => {
    navigate('/');
  };

  /* User */
  const handleLoginNavigate = () => {
    navigate('/login');
  };
  
  const handleJoinNavigate = () => {
    navigate('/Join');
  };
  
  const handleAddInfoNavigate = () => {
    navigate('/addInfo');
    
  }

  const handleMyPageNavigate = () => {
    navigate('/mypage');
    
  }

   /* 우리집 */
  const handleBoardNavigate = () => {
    navigate('/board');
  }

  const handleBoardHotNavigate = () => {
    navigate('/board/hot');
  }

  const handleBoardMyPostNavigate = () => {
    navigate('/board/my-post');
  }

  const handleBoardMyCommentedPostNavigate = () => {
    navigate('/board/my-commented-post');
  }

  const handleBoardMyScrapNavigate = () => {
    navigate('/board/my-scrap');
  }

  const handleBoardWriteNavigate = () => {
    navigate('/board/write');
  }

  const handleBoardViewNavigate = () => {
    navigate('/board/view');
  }

  const handleBoardEditNavigate = (postId: number) => {
    navigate('/board/edit/'+postId);
  }

  const handleBoardSearchNavigate = (keyword: string) => {
    navigate('/board/search/'+keyword);
  }


   /* Love On Chat */
  const handleLoveOnChatNavigate = () => {
    navigate('/love-on-chat');
  }

   /* 보이스룸 */
  const handleVoiceRoomNavigate = () => {
    navigate('/voiceroom');
  }
  const handleVoiceRoomViewNavigate = () => {
    navigate('/voiceroom/view');
  }
  const handleVoiceRoomViewHostNavigate = () => {
    navigate('/voiceroom/onair');
  }
  const handleVoiceRoomEndNavigate = () => {
    navigate('/voiceroom/end');
  }
  
   /* Chat */
  const handleChatNavigate = () => {
    navigate('/chat');
  };
  const handleChatViewNavigate = () => {
    navigate('/chat/view')
  }
  const handleChatInfoNavigate = () => {
    navigate('/chat/view/info')
  }


  return {
    handleGoBack, handleMainNavigate,
    handleLoginNavigate, handleJoinNavigate, handleAddInfoNavigate,
    handleMyPageNavigate,
    handleBoardNavigate, handleBoardHotNavigate, handleBoardSearchNavigate,
    handleBoardMyPostNavigate, handleBoardMyCommentedPostNavigate, handleBoardMyScrapNavigate,
    handleBoardWriteNavigate, handleBoardViewNavigate, handleBoardEditNavigate,
    handleLoveOnChatNavigate,
    handleVoiceRoomNavigate, handleVoiceRoomViewNavigate,handleVoiceRoomViewHostNavigate, handleVoiceRoomEndNavigate,
    handleChatNavigate, handleChatViewNavigate, handleChatInfoNavigate,
  };
};

export default useCustomNavigate;