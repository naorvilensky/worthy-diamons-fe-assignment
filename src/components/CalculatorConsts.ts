import { diamondOptions } from '@src/types/diamondTypes';

export interface DiamondPropertyOption {
	label: string;
	value: diamondOptions;
}
export const CUT_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

export const COLOR_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'K', value: 'K' },
	{ label: 'J', value: 'J' },
	{ label: 'I', value: 'I' },
	{ label: 'H', value: 'H' },
	{ label: 'G', value: 'G' },
	{ label: 'F', value: 'F' },
	{ label: 'E', value: 'E' },
	{ label: 'D', value: 'D' },
];

export const CLARITY_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'SI2', value: 'SI2' },
	{ label: 'SI1', value: 'SI1' },
	{ label: 'VS2', value: 'VS2' },
	{ label: 'VS1', value: 'VS1' },
	{ label: 'VVS2', value: 'VVS2' },
	{ label: 'VVS1', value: 'VVS1' },
	{ label: 'IF', value: 'IF' },
	{ label: 'FL', value: 'FL' },
];

export const SYMMETRY_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

export const POLISH_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

export const FLUORESCENCE_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'V. Strong', value: 'VSTG' },
	{ label: 'Strong', value: 'STG' },
	{ label: 'Medium', value: 'MED' },
	{ label: 'Faint', value: 'FNT' },
	{ label: 'None', value: 'NON' },
];
