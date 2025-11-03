import { CssBaseline, Button } from '@mui/material';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { Home } from '@pages/Home/Home';

import './App.scss';

function App() {
	const theme = createTheme({
		colorSchemes: {
			dark: true,
		},
	});

	return (
		<ThemeProvider theme={theme} defaultMode="light" modeStorageKey="mui-mode">
			<CssBaseline />
			<Home />
		</ThemeProvider>
	);
}

// function Switcher() {
// 	const { mode, setMode } = useColorScheme();
// 	if (!mode) {
// 		return null;
// 	}

// 	return (
// 		<Button
// 			onClick={() => {
// 				console.log(mode);
// 				setMode(mode === 'light' ? 'dark' : 'light');
// 			}}
// 			sx={{ position: 'absolute', top: 16, right: 16 }}
// 			variant="outlined"
// 		>
// 			{mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
// 		</Button>
// 	);
// }

export default App;
