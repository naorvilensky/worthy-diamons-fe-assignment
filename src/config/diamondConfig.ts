import { Diamond } from '../types/diamondInterface';

export const BASE_PRICE = 5000; // base multiplier per carat
export const CARAT_POWER_BASELINE = 1.2;
export const CARAT_POWER_HEURISTIC = 1.3;

export const HEURISTIC_WEIGHTS = {
	shape: 0.1,
	cut: 0.15,
	color: 0.1,
	clarity: 0.15,
	polish: 0.1,
	symmetry: 0.1,
	fluorescence: 0.05,
	origin: 0.05,
};

export const UI_DEFAULTS: Diamond = {
	carat: 1.0,
	shape: 'Heart',
	cut: 'GOOD',
	color: 'D',
	clarity: 'VS1',
	polish: 'GOOD',
	symmetry: 'GOOD',
	fluorescence: 'MEDIUM',
	origin: 'NATURAL',
};

export const UI_RANGES = {
	carat: { min: 0.05, max: 30, step: 0.1 },
};
