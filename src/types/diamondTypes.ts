import { Diamond } from '@pricingAlgorithm/diamondInterface';

export type diamondOptions =
	| Diamond['shape']
	| Diamond['color']
	| Diamond['clarity']
	| Diamond['cut']
	| Diamond['symmetry']
	| Diamond['origin']
	| Diamond['polish']
	| Diamond['fluorescence'];
