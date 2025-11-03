import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@pricingAlgorithm': path.resolve(__dirname, 'src/pricingAlgorithm'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		},
	},
});
