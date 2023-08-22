import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { LocalFireDepartment, Home, Article, ModeComment, Bookmark } from '@mui/icons-material'
import { setSelectedMenu } from 'redux/boardMenuSlice';
import { RootState } from 'redux/store';

interface MenuItemProps {
  icon: React.ReactNode;
  primaryText: string;
  onClick: () => void;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, primaryText, onClick, isActive }) => (
  <ListItem>
    <ListItemButton
      onClick={onClick}
      sx={{
        borderRadius: 2,
        backgroundColor: isActive ? 'rgba(202, 184, 255, 0.20)' : 'transparent',
        '&:hover': { backgroundColor: 'rgba(202, 184, 255, 0.10)', borderRadius: 2 }
      }}
    >
      <ListItemIcon sx={{ color: '#716FDC' }}>{icon}</ListItemIcon>
      <ListItemText
        primary={primaryText}
        primaryTypographyProps={{
          fontFamily: isActive ? 'Pretendard-SemiBold' : 'Pretendard-Regular'
        }}
      />
    </ListItemButton>
  </ListItem>
);

function BoardMenu() {
  const dispatch = useDispatch();
  const selectedMenu = useSelector((state: RootState) => state.boardMenu.selectedMenu);

  const { handleBoardNavigate, handleBoardHotNavigate, handleBoardMyPostNavigate, handleBoardMyCommentedPostNavigate, handleBoardMyScrapNavigate } = useCustomNavigate();

  const handleMenuClick = (menu: string) => {
    dispatch(setSelectedMenu(menu));

    switch (menu) {
      case 'hot':
        return handleBoardHotNavigate();
      case 'home':
        return handleBoardNavigate();
      case 'myPost':
        return handleBoardMyPostNavigate();
      case 'myCommentedPost':
        return handleBoardMyCommentedPostNavigate();
      case 'myScrap':
        return handleBoardMyScrapNavigate();
      default:
        return () => { };
    }
  };

  return (
    <nav>
      <List>
        <MenuItem
          icon={<LocalFireDepartment />}
          primaryText="HOT"
          onClick={() => handleMenuClick("hot")}
          isActive={selectedMenu === "hot"}
        />
        <MenuItem
          icon={<Home />}
          primaryText="우리집"
          onClick={() => handleMenuClick("home")}
          isActive={selectedMenu === "home"}
        />
      </List>
      <Divider variant="middle" sx={{ backgroundColor: '#968AE1' }} />
      <List>
        <MenuItem
          icon={<Article />}
          primaryText="내가 쓴 글"
          onClick={() => handleMenuClick("myPost")}
          isActive={selectedMenu === "myPost"}
        />
        <MenuItem
          icon={<ModeComment />}
          primaryText="댓글 단 글"
          onClick={() => handleMenuClick("myCommentedPost")}
          isActive={selectedMenu === "myCommentedPost"}
        />
        <MenuItem
          icon={<Bookmark />}
          primaryText="스크랩"
          onClick={() => handleMenuClick("myScrap")}
          isActive={selectedMenu === "myScrap"}
        />
      </List>
    </nav>
  );
};

export default BoardMenu;