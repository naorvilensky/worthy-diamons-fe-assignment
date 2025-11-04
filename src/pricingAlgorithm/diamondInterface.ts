import {
	CUT_MAP,
	COLOR_MAP,
	CLARITY_MAP,
	FLUORESCENCE_MAP,
	POLISH_MAP,
	SHAPE_MAP,
	SYMMETRY_MAP,
	ORIGIN_MAP,
} from '@src/pricingAlgorithm/diamondConsts';

export interface Diamond {
	carat: number;
	shape: keyof typeof SHAPE_MAP;
	cut: keyof typeof CUT_MAP;
	color: keyof typeof COLOR_MAP;
	clarity: keyof typeof CLARITY_MAP;
	polish: keyof typeof POLISH_MAP;
	symmetry: keyof typeof SYMMETRY_MAP;
	fluorescence: keyof typeof FLUORESCENCE_MAP;
	origin: keyof typeof ORIGIN_MAP;
	price?: number;
}
