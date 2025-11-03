import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState, useMemo } from 'react';
import { themes } from '@src/theme';
import { Home } from '@pages/Home/Home';

import './App.scss';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () => (mode === 'light' ? themes.lightTheme : themes.darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'none',
          border: '1px solid #C9A227',
          borderRadius: 8,
          padding: '6px 12px',
          cursor: 'pointer',
        }}
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      >
        Toggle {mode === 'light' ? 'Dark' : 'Light'}
      </button>
      <Home />
    </ThemeProvider>
  );
}

export default App;
