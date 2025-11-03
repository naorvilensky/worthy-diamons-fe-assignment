import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

// ----- Shared typography -----
const typography: ThemeOptions['typography'] = {
  fontFamily: ['Inter', 'Playfair Display', 'serif'].join(','),
  h1: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 600,
    fontSize: '2.5rem',
  },
  h2: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 500,
    fontSize: '1.8rem',
  },
  body1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
  },
  body2: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    fontFamily: 'Inter, sans-serif',
  },
};

const components: ThemeOptions['components'] = {
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
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 12,
        },
      },
    },
  },
};

// ----- Light theme -----
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C9A227', // Gold
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E8C77F', // Soft gold
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
  typography,
  shape: { borderRadius: 12 },
  components,
});

// ----- Dark theme -----
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E8C77F', // Warm gold accent
      contrastText: '#1A1A1A',
    },
    secondary: {
      main: '#C9A227',
    },
    background: {
      default: '#1A1A1A',
      paper: '#222222',
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#CCCCCC',
    },
    error: {
      main: '#F28B82',
    },
  },
  typography,
  shape: { borderRadius: 12 },
  components: deepmerge(components, {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#222222',
          boxShadow: '0 2px 8px rgba(255,255,255,0.05)',
        },
      },
    },
  }),
});

export const themes = { lightTheme, darkTheme };
