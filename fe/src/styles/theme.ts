import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard-SemiBold, Pretendard-Regular, Pretendard-Bold, Pretendard-Black',
  },
  palette: {
    primary: {
      main: '#968AE1', // Main 2
      light: '#CAB8FF', // Main 1
      dark: '#716FDC', // Main 3
      contrastText: '#fff'
    },
    secondary: {
      main: '#698AFF', // Sub 2
      light: '#88A2FF', // Sub 1
      dark: '#446AF0', // Sub 3
    },
    info: {
      main: '#ffffff', // WH 1
      light: '#D3DCE9', // WH2
      dark: '#CAB8FF', // BL 1
      contrastText: '#968AE1' //Main 2
    },
    text: {
      primary: '#303030', // Typography의 기본 색상지정
    },
  },
});

export default theme;