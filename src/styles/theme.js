import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50',
      light: '#34495E',
      dark: '#1A252F',
    },
    secondary: {
      main: '#E74C3C',
      light: '#FF6B6B',
      dark: '#C0392B',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
});

export default theme;