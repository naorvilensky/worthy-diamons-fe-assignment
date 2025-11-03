// priceAlgorithms.ts
import {
	BASE_PRICE,
	CARAT_POWER_BASELINE,
	CARAT_POWER_HEURISTIC,
	IDEAL_TABLE,
	IDEAL_DEPTH,
	IDEAL_LWR,
	PROP_SCORE_IDEAL,
	PROP_SCORE_MIN,
	PROP_SCORE_SLOPE,
	HEURISTIC_WEIGHTS,
	HYBRID_RATIO,
} from '@pricingAlgorithm/diamondConfig';
import {
	SHAPE_MAP,
	SHAPE_FACTOR,
	CUT_MAP,
	COLOR_MAP,
	CLARITY_MAP,
	POLISH_MAP,
	SYMMETRY_MAP,
	FLUORESCENCE_MAP,
	CERTIFICATE_MAP,
	CUT_FACTOR,
	COLOR_FACTOR,
	CLARITY_FACTOR,
	POLISH_FACTOR,
	SYMMETRY_FACTOR,
	FLUORESCENCE_FACTOR,
	CERTIFICATE_FACTOR,
} from '@pricingAlgorithm/diamondConsts';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

// ---------- Utility ----------

function proportionScore(value: number, idealMin: number, idealMax: number): number {
	if (value >= idealMin && value <= idealMax) return PROP_SCORE_IDEAL;
	const diff = Math.abs((idealMin + idealMax) / 2 - value);
	return Math.max(PROP_SCORE_MIN, PROP_SCORE_IDEAL - diff * PROP_SCORE_SLOPE);
}

// ---------- 1. Baseline Algorithm ----------

export function baselinePrice(d: Diamond): number {
	const base = BASE_PRICE * Math.pow(d.carat, CARAT_POWER_BASELINE);
	const proportionFactor =
		proportionScore(d.table, IDEAL_TABLE.min, IDEAL_TABLE.max) *
		proportionScore(d.depth, IDEAL_DEPTH.min, IDEAL_DEPTH.max) *
		proportionScore(d.lwr, IDEAL_LWR.min, IDEAL_LWR.max);

	return Math.round(
		base *
			SHAPE_FACTOR[d.shape] *
			CUT_FACTOR[d.cut] *
			COLOR_FACTOR[d.color] *
			CLARITY_FACTOR[d.clarity] *
			POLISH_FACTOR[d.polish] *
			SYMMETRY_FACTOR[d.symmetry] *
			FLUORESCENCE_FACTOR[d.fluorescence] *
			CERTIFICATE_FACTOR[d.certificate] *
			proportionFactor
	);
}

// ---------- 2. Heuristic Algorithm ----------

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
		CERTIFICATE_MAP[d.certificate] * w.certificate;

	const propScore =
		proportionScore(d.table, IDEAL_TABLE.min, IDEAL_TABLE.max) *
		proportionScore(d.depth, IDEAL_DEPTH.min, IDEAL_DEPTH.max) *
		proportionScore(d.lwr, IDEAL_LWR.min, IDEAL_LWR.max);

	const rarityBoost = Math.pow(score / 4, 1.5);
	return Math.round(base * rarityBoost * propScore);
}

// ---------- 3. KNN Algorithm ----------

export function predictPriceKNN(d: Diamond, dataset: Diamond[], k = 4): number {
	if (!dataset.length) return heuristicPrice(d);

	const withDistance = dataset.map(x => {
		const distance = Math.sqrt(
			Math.pow(x.carat - d.carat, 2) +
				Math.pow(SHAPE_MAP[x.shape] - SHAPE_MAP[d.shape], 2) +
				Math.pow(CUT_MAP[x.cut] - CUT_MAP[d.cut], 2) +
				Math.pow(COLOR_MAP[x.color] - COLOR_MAP[d.color], 2) +
				Math.pow(CLARITY_MAP[x.clarity] - CLARITY_MAP[d.clarity], 2) +
				Math.pow(POLISH_MAP[x.polish] - POLISH_MAP[d.polish], 2) +
				Math.pow(SYMMETRY_MAP[x.symmetry] - SYMMETRY_MAP[d.symmetry], 2) +
				Math.pow(FLUORESCENCE_MAP[x.fluorescence] - FLUORESCENCE_MAP[d.fluorescence], 2) +
				Math.pow(CERTIFICATE_MAP[x.certificate] - CERTIFICATE_MAP[d.certificate], 2)
		);
		return { ...x, distance };
	});

	const nearest = withDistance.sort((a, b) => a.distance - b.distance).slice(0, k);
	const weightedSum = nearest.reduce((acc, x) => acc + (x.price || 0) / x.distance, 0);
	const weightTotal = nearest.reduce((acc, x) => acc + 1 / x.distance, 0);

	return Math.round(weightedSum / weightTotal);
}

// ---------- 4. Hybrid Algorithm ----------

export function hybridPrice(d: Diamond, dataset: Diamond[] = [], k = 4): number {
	const base = heuristicPrice(d);
	if (!dataset.length) return base;
	const knnPrice = predictPriceKNN(d, dataset, k);
	return Math.round(base * HYBRID_RATIO.heuristic + knnPrice * HYBRID_RATIO.knn);
}

// ---------- 5. Confidence Score ----------

export function confidenceScore(d: Diamond, dataset: Diamond[], k = 4): number {
	if (!dataset.length) return 0.5;
	const distances = dataset
		.map(x =>
			Math.sqrt(
				Math.pow(x.carat - d.carat, 2) +
					Math.pow(SHAPE_MAP[x.shape] - SHAPE_MAP[d.shape], 2) +
					Math.pow(CUT_MAP[x.cut] - CUT_MAP[d.cut], 2) +
					Math.pow(COLOR_MAP[x.color] - COLOR_MAP[d.color], 2) +
					Math.pow(CLARITY_MAP[x.clarity] - CLARITY_MAP[d.clarity], 2) +
					Math.pow(POLISH_MAP[x.polish] - POLISH_MAP[d.polish], 2) +
					Math.pow(SYMMETRY_MAP[x.symmetry] - SYMMETRY_MAP[d.symmetry], 2) +
					Math.pow(
						FLUORESCENCE_MAP[x.fluorescence] - FLUORESCENCE_MAP[d.fluorescence],
						2
					) +
					Math.pow(CERTIFICATE_MAP[x.certificate] - CERTIFICATE_MAP[d.certificate], 2)
			)
		)
		.sort((a, b) => a - b)
		.slice(0, k);

	const avgDist = distances.reduce((acc, d) => acc + d, 0) / (distances.length || 1);
	const confidence = Math.max(0, Math.min(1, 1 / (1 + avgDist)));
	return parseFloat(confidence.toFixed(2));
}
