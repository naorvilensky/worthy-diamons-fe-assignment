// Explicitly cast the JSON to Diamond[] (trusting data consistency)
import rawData from '@assets/similar-diamonds/similar_diamonds.json';
import {
	CUT_MAP,
	COLOR_MAP,
	CLARITY_MAP,
	POLISH_MAP,
	SYMMETRY_MAP,
	FLUORESCENCE_MAP,
	ORIGIN_MAP,
} from '@pricingAlgorithm/diamondConsts';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

const dataset = rawData as unknown as Diamond[];

/**
 * Get the N most similar diamonds (same shape only)
 */
export function getSimilarDiamonds(target: Diamond, limit = 10): Diamond[] {
	let sameShape = dataset.filter(x => x.shape === target.shape);

	if (!sameShape.length) {
		sameShape = dataset; // Fallback to all diamonds if none match shape
	}

	const withDistance = sameShape.map(x => {
		const distance = Math.sqrt(
			Math.pow(x.carat - target.carat, 2) +
				Math.pow(CUT_MAP[x.cut] - CUT_MAP[target.cut], 2) +
				Math.pow(COLOR_MAP[x.color] - COLOR_MAP[target.color], 2) +
				Math.pow(CLARITY_MAP[x.clarity] - CLARITY_MAP[target.clarity], 2) +
				Math.pow(POLISH_MAP[x.polish] - POLISH_MAP[target.polish], 2) +
				Math.pow(SYMMETRY_MAP[x.symmetry] - SYMMETRY_MAP[target.symmetry], 2) +
				Math.pow(
					FLUORESCENCE_MAP[x.fluorescence] - FLUORESCENCE_MAP[target.fluorescence],
					2
				) +
				Math.pow(ORIGIN_MAP[x.origin] - ORIGIN_MAP[target.origin], 2)
		);
		return { ...x, distance };
	});

	console.log('withDistance', withDistance);

	return withDistance
		.filter(x => x.distance > 0)
		.sort((a, b) => a.distance - b.distance)
		.slice(0, limit);
}
