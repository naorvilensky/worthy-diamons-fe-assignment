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

export default App;
