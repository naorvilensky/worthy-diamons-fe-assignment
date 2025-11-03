import { CUT_FACTOR, COLOR_FACTOR, CLARITY_FACTOR, CUT_MAP, COLOR_MAP, CLARITY_MAP } from "./consts";
import { Diamond } from "./diamond.interface";



// ---------- 1. Baseline Algorithm ----------

export function baselinePrice(diamond: Diamond): number {
  const { carat, cut, color, clarity } = diamond;
  const base = 5000 * Math.pow(carat, 1.2);
  return Math.round(
    base * CUT_FACTOR[cut] * COLOR_FACTOR[color] * CLARITY_FACTOR[clarity]
  );
}

// ---------- 2. Heuristic Algorithm ----------

export function heuristicPrice(diamond: Diamond): number {
  const { carat, cut, color, clarity } = diamond;
  const base = 4000 * Math.pow(carat, 1.3);

  const cutScore = CUT_MAP[cut];
  const colorScore = COLOR_MAP[color];
  const clarityScore = CLARITY_MAP[clarity];

  const quality = cutScore * 0.3 + colorScore * 0.3 + clarityScore * 0.4;
  const rarityBoost = Math.pow(quality / 4, 1.5);

  return Math.round(base * rarityBoost);
}

// ---------- 3. KNN Algorithm ----------

export function predictPriceKNN(
  diamond: Diamond,
  dataset: Diamond[],
  k = 4
): number {
  if (!dataset.length) return heuristicPrice(diamond);

  const withDistance = dataset.map((d) => {
    const distance = Math.sqrt(
      Math.pow(d.carat - diamond.carat, 2) +
        Math.pow(CUT_MAP[d.cut] - CUT_MAP[diamond.cut], 2) +
        Math.pow(COLOR_MAP[d.color] - COLOR_MAP[diamond.color], 2) +
        Math.pow(CLARITY_MAP[d.clarity] - CLARITY_MAP[diamond.clarity], 2)
    );
    return { ...d, distance };
  });

  const nearest = withDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k);

  const weightedSum = nearest.reduce(
    (acc, d) => acc + (d.price || 0) / d.distance,
    0
  );
  const weightTotal = nearest.reduce((acc, d) => acc + 1 / d.distance, 0);

  return Math.round(weightedSum / weightTotal);
}

// ---------- 4. Hybrid Algorithm ----------

export function hybridPrice(
  diamond: Diamond,
  dataset: Diamond[] = [],
  k = 4
): number {
  const base = heuristicPrice(diamond);
  if (!dataset.length) return base;

  const knnPrice = predictPriceKNN(diamond, dataset, k);
  return Math.round(base * 0.6 + knnPrice * 0.4);
}

// ---------- 5. Confidence Score ----------

export function confidenceScore(
  diamond: Diamond,
  dataset: Diamond[],
  k = 4
): number {
  if (!dataset.length) return 0.5;

  const distances = dataset
    .map(
      (d) =>
        Math.sqrt(
          Math.pow(d.carat - diamond.carat, 2) +
            Math.pow(CUT_MAP[d.cut] - CUT_MAP[diamond.cut], 2) +
            Math.pow(COLOR_MAP[d.color] - COLOR_MAP[diamond.color], 2) +
            Math.pow(CLARITY_MAP[d.clarity] - CLARITY_MAP[diamond.clarity], 2)
        )
    )
    .sort((a, b) => a - b)
    .slice(0, k);

  const avgDist = distances.reduce((acc, d) => acc + d, 0) / (distances.length || 1);
  const confidence = Math.max(0, Math.min(1, 1 / (1 + avgDist)));
  return parseFloat(confidence.toFixed(2));
}
