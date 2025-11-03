export const CUT_MAP = {
  Fair: 1,
  Good: 2,
  'Very Good': 3,
  Excellent: 4,
} as const;

export const COLOR_MAP = {
  H: 1,
  G: 2,
  F: 3,
  E: 4,
  D: 5,
};

export const CLARITY_MAP = {
  I1: 1,
  SI2: 2,
  SI1: 3,
  VS2: 4,
  VS1: 5,
  VVS2: 6,
  VVS1: 7,
  IF: 8,
};

export const CUT_FACTOR = {
  Fair: 0.9,
  Good: 1.0,
  'Very Good': 1.1,
  Excellent: 1.2,
};

export const COLOR_FACTOR = {
  H: 0.9,
  G: 1.0,
  F: 1.05,
  E: 1.1,
  D: 1.15,
};

export const CLARITY_FACTOR = {
  I1: 0.8,
  SI2: 0.9,
  SI1: 1.0,
  VS2: 1.1,
  VS1: 1.15,
  VVS2: 1.2,
  VVS1: 1.25,
  IF: 1.3,
};
