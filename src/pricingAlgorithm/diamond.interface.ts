import { CUT_MAP, COLOR_MAP, CLARITY_MAP } from "@pricingAlgorithm/consts";

export interface Diamond {
  carat: number;
  cut: keyof typeof CUT_MAP;
  color: keyof typeof COLOR_MAP;
  clarity: keyof typeof CLARITY_MAP;
  price?: number;
}