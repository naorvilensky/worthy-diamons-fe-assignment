export const SHAPE_MAP = {
	Round: 5,
	Princess: 4,
	Cushion: 3,
	Emerald: 3,
	Oval: 4,
	Pear: 4,
	Marquise: 3,
	Radiant: 4,
	Asscher: 3,
	Heart: 5,
} as const;

export const SHAPE_FACTOR = {
	Round: 1.2,
	Princess: 1.1,
	Cushion: 1.0,
	Emerald: 1.0,
	Oval: 1.05,
	Pear: 1.1,
	Marquise: 1.05,
	Radiant: 1.1,
	Asscher: 0.95,
	Heart: 1.15,
} as const;

/* -------------------- CUT -------------------- */
export const CUT_MAP = { FAIR: 1, GOOD: 2, VGOOD: 3, EXCELLENT: 4 } as const;
export const CUT_FACTOR = { FAIR: 0.9, GOOD: 1.0, VGOOD: 1.1, EXCELLENT: 1.2 } as const;

/* -------------------- COLOR -------------------- */
export const COLOR_MAP = {
	K: 1,
	J: 2,
	I: 3,
	H: 4,
	G: 5,
	F: 6,
	E: 7,
	D: 8,
} as const;

export const COLOR_FACTOR = {
	K: 0.8,
	J: 0.85,
	I: 0.9,
	H: 0.95,
	G: 1.0,
	F: 1.05,
	E: 1.1,
	D: 1.15,
} as const;

/* -------------------- CLARITY -------------------- */
export const CLARITY_MAP = {
	SI2: 1,
	SI1: 2,
	VS2: 3,
	VS1: 4,
	VVS2: 5,
	VVS1: 6,
	IF: 7,
	FL: 8,
} as const;

export const CLARITY_FACTOR = {
	SI2: 0.9,
	SI1: 1.0,
	VS2: 1.1,
	VS1: 1.15,
	VVS2: 1.2,
	VVS1: 1.25,
	IF: 1.3,
	FL: 1.35,
} as const;

/* -------------------- SYMMETRY -------------------- */
export const SYMMETRY_MAP = { FAIR: 1, GOOD: 2, VGOOD: 3, EXCELLENT: 4 } as const;
export const SYMMETRY_FACTOR = {
	FAIR: 0.95,
	GOOD: 1.0,
	VGOOD: 1.05,
	EXCELLENT: 1.1,
} as const;

/* -------------------- POLISH -------------------- */
export const POLISH_MAP = { FAIR: 1, GOOD: 2, VGOOD: 3, EXCELLENT: 4 } as const;
export const POLISH_FACTOR = { FAIR: 0.95, GOOD: 1.0, VGOOD: 1.05, EXCELLENT: 1.1 } as const;

/* -------------------- FLUORESCENCE -------------------- */
export const FLUORESCENCE_MAP = {
	VSTRONG: 1,
	STRONG: 2,
	MEDIUM: 3,
	FAINT: 4,
	NONE: 5,
} as const;

export const FLUORESCENCE_FACTOR = {
	VSTRONG: 0.85,
	STRONG: 0.9,
	MEDIUM: 0.95,
	FAINT: 1.0,
	NONE: 1.05,
} as const;

/* -------------------- ORIGIN -------------------- */
export const ORIGIN_MAP = {
	NATURAL: 1,
	LAB_GROWN: 2,
} as const;

export const ORIGIN_FACTOR = {
	NATURAL: 1.0, // baseline
	LAB_GROWN: 0.8, // usually cheaper
} as const;
