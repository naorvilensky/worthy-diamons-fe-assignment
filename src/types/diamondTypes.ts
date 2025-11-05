import { Diamond } from '@src/types/diamondInterface';

export type diamondOptions =
	| Diamond['shape']
	| Diamond['color']
	| Diamond['clarity']
	| Diamond['cut']
	| Diamond['symmetry']
	| Diamond['origin']
	| Diamond['polish']
	| Diamond['fluorescence'];
