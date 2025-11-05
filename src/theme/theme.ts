import { createTheme } from '@mui/material/styles';

// --- Worthy Light Theme ---
const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#C9A227', // gold accent
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#2C2C2C', // dark gray accent
		},
		background: {
			default: '#FAFAFA', // soft gray background
			paper: '#FFFFFF', // cards, modals, etc.
		},
		text: {
			primary: '#1A1A1A', // near-black for strong readability
			secondary: '#555555',
		},
		error: {
			main: '#D9534F',
		},
	},

	shape: { borderRadius: 12 },

	typography: {
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
		button: {
			textTransform: 'none',
			fontWeight: 600,
			fontFamily: 'Inter, sans-serif',
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					padding: '10px 24px',
					fontWeight: 600,
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
					borderRadius: 16,
					boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
					backgroundImage: 'none',
				},
			},
		},
	},
});

export default theme;
