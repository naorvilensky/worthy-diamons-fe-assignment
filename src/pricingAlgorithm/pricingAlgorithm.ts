import {
	SHAPE_MAP,
	SHAPE_FACTOR,
	CUT_MAP,
	COLOR_MAP,
	CLARITY_MAP,
	POLISH_MAP,
	SYMMETRY_MAP,
	FLUORESCENCE_MAP,
	ORIGIN_MAP,
	CUT_FACTOR,
	COLOR_FACTOR,
	CLARITY_FACTOR,
	POLISH_FACTOR,
	SYMMETRY_FACTOR,
	FLUORESCENCE_FACTOR,
	ORIGIN_FACTOR,
} from '@pricingAlgorithm/diamondConsts';
import {
	BASE_PRICE,
	CARAT_POWER_BASELINE,
	CARAT_POWER_HEURISTIC,
	HEURISTIC_WEIGHTS,
} from '@src/config/diamondConfig';
import { Diamond } from '@src/types/diamondInterface';

export function baselinePrice(d: Diamond): number {
	const base = BASE_PRICE * Math.pow(d.carat, CARAT_POWER_BASELINE);

	return Math.round(
		base *
			SHAPE_FACTOR[d.shape] *
			CUT_FACTOR[d.cut] *
			COLOR_FACTOR[d.color] *
			CLARITY_FACTOR[d.clarity] *
			POLISH_FACTOR[d.polish] *
			SYMMETRY_FACTOR[d.symmetry] *
			FLUORESCENCE_FACTOR[d.fluorescence] *
			ORIGIN_FACTOR[d.origin]
	);
}

export function heuristicPrice(d: Diamond): number {
	const base = BASE_PRICE * Math.pow(d.carat, CARAT_POWER_HEURISTIC);

	const w = HEURISTIC_WEIGHTS;
	const score =
		SHAPE_MAP[d.shape] * w.shape +
		CUT_MAP[d.cut] * w.cut +
		COLOR_MAP[d.color] * w.color +
		CLARITY_MAP[d.clarity] * w.clarity +
		POLISH_MAP[d.polish] * w.polish +
		SYMMETRY_MAP[d.symmetry] * w.symmetry +
		FLUORESCENCE_MAP[d.fluorescence] * w.fluorescence +
		ORIGIN_MAP[d.origin] * w.origin;

	const rarityBoost = Math.pow(score / 4, 1.5);
	return Math.round(base * rarityBoost);
}

export function calculatePrice(d: Diamond, baselineWeight = 0.4, heuristicWeight = 0.6): number {
	const base = baselinePrice(d);
	const heuristic = heuristicPrice(d);

	const price = base * baselineWeight + heuristic * heuristicWeight;

	return Math.round(price);
}
