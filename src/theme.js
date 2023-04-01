import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:  "'Assistant', sans-serif",
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;