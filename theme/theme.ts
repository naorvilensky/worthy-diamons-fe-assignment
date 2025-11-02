import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C9A227',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E8C77F',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#555555',
    },
    error: {
      main: '#D9534F',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
        containedPrimary: {
          backgroundColor: '#C9A227',
          '&:hover': { backgroundColor: '#E8C77F' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
