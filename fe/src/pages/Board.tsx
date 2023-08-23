import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedMenu } from 'redux/boardMenuSlice';
import { Container, Stack, Box } from '@mui/material';
import LayoutAfterLogin from 'components/layout/LayoutAfterLogin';
import BoardHeader from 'components/board/BoardHeader';
import BoardMenu from 'components/board/BoardMenu';
import BoardSearchBar from 'components/board/BoardSearchBar';
import BoardHome from 'components/board/BoardHome';
import BoardHot from 'components/board/BoardHot';
import BoardMyPost from 'components/board/BoardMyPost';
import BoardMyCommentedPost from 'components/board/BoardMyCommentedPost';
import BoardMyScrap from 'components/board/BoardMyScrap';
import BoardWrite from 'components/board/BoardWrite';
import BoardView from 'components/board/BoardView';
import BoardEdit from 'components/board/BoardEdit';
import BoardSearch from 'components/board/BoardSearch';

function Board() {
  const location = useLocation();
  const isHome = location.pathname === '/board' || location.pathname.includes('/board/search');
  const isWrite = location.pathname === '/board/write';

  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case '/board/hot':
        dispatch(setSelectedMenu('hot'));
        break;
      case '/board/my-post':
        dispatch(setSelectedMenu('myPost'));
        break;
      case '/board/my-commented-post':
        dispatch(setSelectedMenu('myCommentedPost'));
        break;
      case '/board/my-scrap':
        dispatch(setSelectedMenu('myScrap'));
        break;
      default:
        dispatch(setSelectedMenu('home')); // 기본 메뉴로 설정
        break;
    }
  }, [location.pathname, dispatch]);

  if (isWrite) {
    return (
      <div>
        <LayoutAfterLogin>
          <BoardWrite />
        </LayoutAfterLogin>
      </div>
    );
  }

  return (
    <div>
      <LayoutAfterLogin>
        <Container sx={{ paddingBottom: 10 }}>
          <Stack>
            <BoardHeader />
            <Stack direction="row">
              <Box sx={{ width: '20%', minWidth: 192, paddingRight: 1 }}>
                <Box sx={{ border: '1px solid #968AE1', borderRadius: 2 }}>
                  <BoardMenu />
                </Box>
                <Box sx={{ paddingTop: 2 }}>
                  {isHome ? <BoardSearchBar /> : null}
                </Box>
              </Box>
              <Box sx={{ width: '80%', paddingTop: 2 }}>
                <Container>
                  <Routes>
                    <Route path="/*" element={<BoardHome />} />
                    <Route path="hot" element={<BoardHot />} />
                    <Route path="my-post" element={<BoardMyPost />} />
                    <Route path="my-commented-post" element={<BoardMyCommentedPost />} />
                    <Route path="my-scrap" element={<BoardMyScrap />} />
                    <Route path="write" element={<BoardWrite />} />
                    <Route path="edit/:postId" element={<BoardEdit />} />
                    <Route path="view/:postId" element={<BoardView />} />
                    <Route path="search/:keyword" element={<BoardSearch />} />
                  </Routes>
                </Container>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </LayoutAfterLogin>
    </div>
  );
}

export default Board;