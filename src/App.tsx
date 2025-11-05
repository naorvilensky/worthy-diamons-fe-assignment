import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CalculatorPage } from '@src/pages/CalculatorPage';

import './App.scss';
import theme from './theme/theme';

function App() {
	return (
		<ThemeProvider theme={theme} defaultMode="light" modeStorageKey="mui-mode">
			<CssBaseline />
			<CalculatorPage />
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
