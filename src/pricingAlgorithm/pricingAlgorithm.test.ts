import { baselinePrice, heuristicPrice, calculatePrice } from '@pricingAlgorithm/pricingAlgorithm';
import { Diamond } from '@src/types/diamondInterface';
import { describe, it, expect } from 'vitest';

// ---------------------- MOCK DATA ---------------------- //

const diamond: Diamond = {
	shape: 'Round',
	cut: 'EXCELLENT',
	color: 'D',
	clarity: 'IF',
	polish: 'EXCELLENT',
	symmetry: 'EXCELLENT',
	fluorescence: 'NONE',
	origin: 'NATURAL',
	carat: 1.0,
	price: 10000,
};

// ---------------------- TESTS ---------------------- //

describe('pricingAlgorithm', () => {
	it('baselinePrice should return a positive number', () => {
		const price = baselinePrice(diamond);
		expect(price).toBeTypeOf('number');
		expect(price).toBeGreaterThan(0);
	});

	it('heuristicPrice should return a positive number', () => {
		const price = heuristicPrice(diamond);
		expect(price).toBeTypeOf('number');
		expect(price).toBeGreaterThan(0);
	});

	it('heuristicPrice should differ from baselinePrice for the same diamond', () => {
		const base = baselinePrice(diamond);
		const heuristic = heuristicPrice(diamond);
		expect(heuristic).not.toBe(base);
	});

	it('calculatePrice should combine baseline and heuristic prices using default weights', () => {
		const base = baselinePrice(diamond);
		const heuristic = heuristicPrice(diamond);
		const calc = calculatePrice(diamond);

		expect(calc).toBeTypeOf('number');
		expect(calc).toBeGreaterThan(0);

		// The combined price should lie between the two models
		const min = Math.min(base, heuristic);
		const max = Math.max(base, heuristic);
		expect(calc).toBeGreaterThanOrEqual(min);
		expect(calc).toBeLessThanOrEqual(max);
	});

	it('calculatePrice should respect custom weights', () => {
		const price1 = calculatePrice(diamond, 0.8, 0.2);
		const price2 = calculatePrice(diamond, 0.2, 0.8);
		expect(price1).not.toBe(price2);
	});

	it('calculatePrice result should scale with carat size', () => {
		const small = calculatePrice({ ...diamond, carat: 0.5 });
		const large = calculatePrice({ ...diamond, carat: 2 });
		expect(large).toBeGreaterThan(small);
	});
});
