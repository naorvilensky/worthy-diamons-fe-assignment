# Diamond Price Calculator

This project implements a complete diamond price calculation system with multiple pricing algorithms, a frontend interface, and testing. It was built as part of the Worthy home assignment.

---

## Overview

The goal of the project is to estimate the market price of a diamond based on its physical and quality attributes (shape, cut, color, clarity, polish, symmetry, fluorescence, and certification).

The system uses two main algorithms — a **Baseline model** based on deterministic factors, and a **Heuristic model** that adds data-driven scoring to account for rarity and attribute weighting. A hybrid function (`calculatePrice`) combines both for stable yet adaptive results.

---

## Algorithms

### 1. Baseline Price

The baseline model calculates the price as:

`price = BASE_PRICE × carat^CARAT_POWER_BASELINE × (shape × cut × color × clarity × polish × symmetry × fluorescence × origin)`

- **Purpose:** Provides a physically grounded price based on carat scaling and quality factors.
- **Assumption:** Each factor (e.g. cut, color) has a linear multiplicative influence on the total price.
- **Use case:** Produces a consistent price curve even when some attributes are extreme.

---

### 2. Heuristic Price

The heuristic model weights each attribute by its perceived market importance:

`score = Σ(attribute_map × attribute_weight)`  
`price = BASE_PRICE × carat^CARAT_POWER_HEURISTIC × (score / 4)^1.5`

- **Purpose:** Captures nonlinear effects of perceived rarity or demand.
- **Assumption:** Market perception (e.g., color and clarity premiums) can be modeled as weighted scores.
- **Use case:** Produces more realistic variance in price for near-identical diamonds.

---

### 3. Combined Price (`calculatePrice`)

The final price is a weighted combination of the two models:

`price = baseline × baselineWeight + heuristic × heuristicWeight`

Default weights:

- `baselineWeight = 0.4`
- `heuristicWeight = 0.6`

- **Purpose:** Combines the physical accuracy of the baseline model with the adaptive behavior of the heuristic model.
- **Assumption:** The two models complement each other and their weights can be tuned for calibration.

---

## Constants and Factors

All diamond quality factors (shape, cut, color, clarity, polish, symmetry, fluorescence, certificate) are defined in `diamondConsts.ts` as numeric **MAP** and **FACTOR** values.

- **MAPs** are used for scoring and distance comparisons.
- **FACTORS** are used for multiplicative adjustments in the baseline model.

These constants were built to roughly align with grading scales and standard diamond pricing logic.

---

## Assumptions

- Diamond prices scale approximately with carat weight raised to a power greater than 1 (nonlinear growth).
- All quality attributes have a monotonic impact on price — better grades always increase it.
- Quality attributes contribute independently (no interaction terms).
- Data normalization and real market variance are outside the current assignment scope.

---

## How to Run

### Install dependencies

`npm install`

### Run the development server

`npm run dev`

This starts the Vite development server and opens the frontend app in your browser.

### Build for production

`npm run build`

The optimized production build will be available in the `dist` directory.

---

## How to Test

Unit tests for all algorithms are written using **Vitest**.

### Run tests in watch mode

`npm run test`

### Run tests once

`npm run test:run`

The tests verify:

- Correct numeric outputs for all algorithms
- Relationships between baseline, heuristic, and combined prices
- Carat-based price scaling behavior
- Configurable weight influence on final results

---

## How to Adjust

- Tune `BASE_PRICE`, `CARAT_POWER_BASELINE`, and `CARAT_POWER_HEURISTIC` in `diamondConfig.ts` for overall scaling.
- Adjust `HEURISTIC_WEIGHTS` to emphasize or de-emphasize specific quality attributes.
- Modify `baselineWeight` and `heuristicWeight` in `calculatePrice()` to calibrate final pricing sensitivity.

---

## Algorithm Summary

The system combines deterministic and heuristic models to simulate real-world diamond pricing behavior.  
It is designed for modularity, easy tuning, and maintainable growth if a dataset or ML-based model is introduced later.

## UI and Design Assumptions

The user interface for the Diamond Price Calculator was designed with the following assumptions and goals in mind:

### Overall Design Goals

- The UI follows a clean, minimal, and professional layout, inspired by luxury and jewelry-related brands such as Worthy.com and Blue Nile.
- The color palette uses soft neutrals (white and light gray) with gold accents to convey a premium, trustworthy aesthetic.
- The layout prioritizes readability and simplicity over visual complexity, ensuring that the calculator feels approachable for both technical and non-technical users.

### Layout and Responsiveness

- The main page is structured around two cards:
    - The left card contains all input selectors and the "Calculate Price" button.
    - The right card (visible on larger screens) displays the price estimate and similar diamond results.
- On mobile devices and tablets, the layout switches to a single-column format for better usability.
- The breakpoints were chosen based on MUI defaults, with an adjustment for tablet screens to stack vertically at widths below 1200px.

### Typography and Theme

- Typography follows a two-font hierarchy:
    - **Playfair Display** for headings and titles (luxury serif aesthetic)
    - **Inter** for body and UI text (modern sans-serif)
- The theme uses a light color scheme only. A single primary color (`#C9A227`) is used for highlights, buttons, and key actions.
- Rounded corners (`borderRadius: 12–16px`) and soft shadows provide visual depth without clutter.

### User Feedback and Interactivity

- Buttons and interactive elements provide clear hover states.
- The "Calculate Price" action triggers the result display and, on mobile, opens a modal with the price estimate and similar diamonds.
- Changes in the calculator immediately reflect in the `PriceEstimate` component, maintaining live feedback.
- The price and description areas use fixed widths to prevent layout shifts when values change.

### Accessibility and Usability

- Text contrast adheres to accessible color contrast ratios for legibility.
- All components are keyboard-navigable through standard MUI focus management.
- The overall design prioritizes clarity, spacing, and consistent interaction patterns.
