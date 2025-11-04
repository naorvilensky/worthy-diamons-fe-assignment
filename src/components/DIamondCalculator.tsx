import {
	CLARITY_OPTIONS,
	COLOR_OPTIONS,
	CUT_OPTIONS,
	FLUORESCENCE_OPTIONS,
	POLISH_OPTIONS,
	SYMMETRY_OPTIONS,
} from '@components/CalculatorConsts';
import { Box, Stack } from '@mui/material';
import { CaratSelector } from '@src/components/shared/calculatorSelectors/CaratSelector';
import { OptionButtonsSelector } from '@src/components/shared/calculatorSelectors/OptionButtonsGroup';
import { ShapeSelector } from '@src/components/shared/calculatorSelectors/ShapeSelector';
import { Diamond } from '@src/pricingAlgorithm/diamondInterface';
import { diamondOptions } from '@src/types/diamondTypes';

export interface DiamondCalculatorProps {
	diamond: Diamond;
	handleChange: (key: keyof Diamond, value: diamondOptions | number) => void;
}

export function DiamondCalculator({ diamond, handleChange }: DiamondCalculatorProps) {
	return (
		<Box className="diamond-calculator">
			<Stack spacing={{ xs: 1, sm: 2, md: 3 }} width="100" className="form">
				<ShapeSelector
					value={diamond.shape}
					onChange={(shape: Diamond['shape']) =>
						handleChange('shape', shape as diamondOptions)
					}
				/>

				<CaratSelector
					carat={diamond.carat}
					onChange={(carat: Diamond['carat']) => handleChange('carat', carat)}
				/>

				<OptionButtonsSelector
					title="Color"
					options={COLOR_OPTIONS}
					selected={diamond.color}
					onChange={(color: diamondOptions) => handleChange('color', color)}
				/>

				<OptionButtonsSelector
					title="Clarity"
					options={CLARITY_OPTIONS}
					selected={diamond.clarity}
					onChange={(clarity: diamondOptions) => handleChange('clarity', clarity)}
				/>

				<OptionButtonsSelector
					title="Cut"
					options={CUT_OPTIONS}
					selected={diamond.cut}
					onChange={(cut: diamondOptions) => handleChange('cut', cut)}
				/>

				<OptionButtonsSelector
					title="Symmetry"
					options={SYMMETRY_OPTIONS}
					selected={diamond.symmetry}
					onChange={(symmetry: diamondOptions) => handleChange('symmetry', symmetry)}
				/>

				<OptionButtonsSelector
					title="Polish"
					options={POLISH_OPTIONS}
					selected={diamond.polish}
					onChange={(polish: diamondOptions) => handleChange('polish', polish)}
				/>

				<OptionButtonsSelector
					title="Fluorescence"
					options={FLUORESCENCE_OPTIONS}
					selected={diamond.fluorescence}
					onChange={(fluorescence: diamondOptions) =>
						handleChange('fluorescence', fluorescence)
					}
				/>
			</Stack>
		</Box>
	);
}
