import { Diamond } from '@pricingAlgorithm/diamondInterface';

export type diamondOptions =
	| Diamond['color']
	| Diamond['clarity']
	| Diamond['cut']
	| Diamond['symmetry']
	| Diamond['polish']
	| Diamond['fluorescence'];
