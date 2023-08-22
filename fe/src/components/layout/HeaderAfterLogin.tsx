import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { setPage } from 'redux/selectedPageSlice';
import useSocialLogin from '../../hooks/useSocialLogin';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import useMenuAnchor from '../../hooks/useMenuAnchor';
import useDrawer from '../../hooks/useDrawer';
import { AppBar, Toolbar, Container, Box, Stack, IconButton, Badge, Avatar, Tooltip, Menu, Divider, MenuItem, ListItemIcon, Typography, Drawer } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import { ForumRounded, MenuRounded, Settings, Logout } from '@mui/icons-material';
import svgLogo from '../../assets/logo.svg';
import svgFavicon from '../../assets/favicon.svg';
import ButtonText from 'components/common/ButtonText';

const pages = ['우리집', 'Love On Chat', '보이스룸'];

function HeaderAfterLogin() {
  const isScreenOf840Less = useMediaQuery('(max-width: 840px)');
  const isScreenOf520Less = useMediaQuery('(max-width: 520px)');

  const { anchorEl, open, handleClick, handleClose } = useMenuAnchor();
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const { handleLogout } = useSocialLogin();
  const { handleMainNavigate, handleBoardNavigate, handleLoveOnChatNavigate, handleVoiceRoomNavigate, handleChatNavigate, handleMyPageNavigate } = useCustomNavigate();

  const dispatch = useDispatch();
  
  const selectedPage = useSelector((state: RootState) => state.selectedPage);
  const nickname = useSelector((state: RootState) => state.user.nickname);
  const profile = useSelector((state: RootState) => state.user.profile);

  function navigateToPage(page: string) {
    dispatch(setPage(page));
    const navigateFunction = getNavigateFunction(page);
    navigateFunction();
  }

  function getNavigateFunction(page: string) {
    switch (page) {
      case 'main':
        return handleMainNavigate;
      case '우리집':
        return handleBoardNavigate;
      case 'Love On Chat':
        return handleLoveOnChatNavigate;
      case '보이스룸':
        return handleVoiceRoomNavigate;
      case 'chat':
        return handleChatNavigate;
      default:
        return () => {};
    }
  }

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            {isScreenOf520Less ? (
              <img src={svgFavicon} alt="favicon" height="44px" onClick={() => navigateToPage('main')} />
            ) : (
              <img src={svgLogo} alt="logo" height="44px" onClick={() => navigateToPage('main')} />
            )}
          </Box>

          {isScreenOf840Less ? null : (
            <Stack direction="row" spacing={2} alignItems="center">
              {pages.map((page) => (
                <ButtonText
                  key={page} label={page}
                  onClick={() => navigateToPage(page)}
                  selectedPage={selectedPage}
                />
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={4} alignItems="center">
            {isScreenOf840Less ? (
              <IconButton onClick={toggleDrawer}>
                <MenuRounded sx={{ fontSize: 36, color: '#303030' }} />
              </IconButton>
            ) : null}
            {/* <Badge color="secondary" variant="dot"> */}
              <ForumRounded
                sx={{ fontSize: 32, ...(selectedPage === 'chat' ? { color: '#716FDC' } : {}) }}
                onClick={() => navigateToPage('chat')}
              />
            {/* </Badge> */}
            {/* <Badge color="secondary">
              <NotificationsRounded sx={{ fontSize: 32, color: '#303030' }} />
            </Badge> */}
            <Tooltip title="">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 36, height: 36 }} src={profile}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Stack>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box display="flex" justifyContent="center" sx={{ pt: 1, pb: 2 }}>
              <Typography color="primary">{nickname}</Typography>
              <Typography>&nbsp;님</Typography>
            </Box>
            <Divider />
            <MenuItem onClick={() => { handleMyPageNavigate(); handleClose(); }} sx={{ py: 2 }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              마이페이지
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ py: 2 }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              로그아웃
            </MenuItem>
          </Menu>

          <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
            <Stack spacing={3} alignItems="center" sx={{ py: 2 }}>
              {pages.map((page) => (
                <ButtonText
                key={page} label={page}
                onClick={() => navigateToPage(page)}
                selectedPage={selectedPage}
              />
              ))}
            </Stack>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default HeaderAfterLogin;