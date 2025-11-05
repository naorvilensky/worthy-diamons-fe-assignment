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

		// --- Headings ---
		h1: {
			fontFamily: 'Playfair Display, serif',
			fontWeight: 600,
			fontSize: '2.5rem', // ~40px
			lineHeight: 1.2,
			letterSpacing: '-0.01em',
		},
		h2: {
			fontFamily: 'Playfair Display, serif',
			fontWeight: 500,
			fontSize: '1.8rem', // ~29px
			lineHeight: 1.3,
			letterSpacing: '-0.005em',
		},
		h3: {
			fontFamily: 'Playfair Display, serif',
			fontWeight: 500,
			fontSize: '1.5rem', // ~24px
			lineHeight: 1.3,
		},
		h4: {
			fontFamily: 'Playfair Display, serif',
			fontWeight: 500,
			fontSize: '1.25rem', // ~20px
			lineHeight: 1.4,
		},

		// --- Subheadings / subtitles ---
		subtitle1: {
			fontFamily: 'Inter, sans-serif',
			fontWeight: 600,
			fontSize: '1rem',
			lineHeight: 1.5,
		},
		subtitle2: {
			fontFamily: 'Inter, sans-serif',
			fontWeight: 500,
			fontSize: '0.9rem',
			lineHeight: 1.4,
		},

		// --- Body text ---
		body1: {
			fontFamily: 'Inter, sans-serif',
			fontSize: '1rem',
			lineHeight: 1.6,
			color: '#1A1A1A',
		},
		body2: {
			fontFamily: 'Inter, sans-serif',
			fontSize: '0.875rem',
			lineHeight: 1.5,
			color: '#555555',
		},

		// --- Buttons / UI text ---
		button: {
			fontFamily: 'Inter, sans-serif',
			fontWeight: 600,
			fontSize: '0.9rem',
			textTransform: 'none',
		},

		// --- Captions / metadata ---
		caption: {
			fontFamily: 'Inter, sans-serif',
			fontSize: '0.75rem',
			lineHeight: 1.4,
			color: '#777777',
		},
		overline: {
			fontFamily: 'Inter, sans-serif',
			fontWeight: 600,
			fontSize: '0.75rem',
			textTransform: 'uppercase',
			letterSpacing: '0.05em',
			color: '#999999',
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
