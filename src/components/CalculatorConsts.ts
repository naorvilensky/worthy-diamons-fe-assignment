import { Diamond } from '@pricingAlgorithm/diamondInterface';

export type DiamondPropertyOption = Partial<
	Record<Exclude<Diamond[keyof Diamond], number | undefined>, string>
>;

export const ORIGIN_OPTIONS: DiamondPropertyOption = {
	NATURAL: 'Natural',
	LAB_GROWN: 'Lab Grown',
};

export const CUT_OPTIONS: DiamondPropertyOption = {
	FAIR: 'Fair',
	GOOD: 'Good',
	VGOOD: 'V. Good',
	EX: 'Excellent',
};

export const COLOR_OPTIONS: DiamondPropertyOption = {
	K: 'K',
	J: 'J',
	I: 'I',
	H: 'H',
	G: 'G',
	F: 'F',
	E: 'E',
	D: 'D',
};

export const CLARITY_OPTIONS: DiamondPropertyOption = {
	SI2: 'SI2',
	SI1: 'SI1',
	VS2: 'VS2',
	VS1: 'VS1',
	VVS2: 'VVS2',
	VVS1: 'VVS1',
	IF: 'IF',
	FL: 'FL',
};

export const SYMMETRY_OPTIONS: DiamondPropertyOption = {
	FAIR: 'Fair',
	GOOD: 'Good',
	VGOOD: 'V. Good',
	EX: 'Excellent',
};

export const POLISH_OPTIONS: DiamondPropertyOption = {
	FAIR: 'Fair',
	GOOD: 'Good',
	VGOOD: 'V. Good',
	EX: 'Excellent',
};

export const FLUORESCENCE_OPTIONS: DiamondPropertyOption = {
	VSTG: 'V. Strong',
	STG: 'Strong',
	MED: 'Medium',
	FNT: 'Faint',
	NON: 'None',
};
