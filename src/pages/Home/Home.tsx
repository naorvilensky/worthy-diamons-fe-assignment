import { useState } from 'react';

import { Box, Typography, TextField, Slider, Button, Stack } from '@mui/material';
import { UI_DEFAULTS, UI_RANGES } from '@pricingAlgorithm/diamondConfig';
import { Diamond } from '@pricingAlgorithm/diamondInterface';
import { hybridPrice } from '@pricingAlgorithm/pricingAlgorithm';
import { OptionButtonsGroup } from '@src/components/OptionButtonsGroup';
import { ShapeSelector } from '@src/components/ShapeSelector';
import { SimilarDiamondsModal } from '@src/components/SimilarDiamondsModal';
import { diamondOptions } from '@src/types/diamondTypes';

export interface DiamondPropertyOption {
	label: string;
	value: diamondOptions;
}

const CUT_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

const COLOR_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'K', value: 'K' },
	{ label: 'J', value: 'J' },
	{ label: 'I', value: 'I' },
	{ label: 'H', value: 'H' },
	{ label: 'G', value: 'G' },
	{ label: 'F', value: 'F' },
	{ label: 'E', value: 'E' },
	{ label: 'D', value: 'D' },
];

const CLARITY_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'SI2', value: 'SI2' },
	{ label: 'SI1', value: 'SI1' },
	{ label: 'VS2', value: 'VS2' },
	{ label: 'VS1', value: 'VS1' },
	{ label: 'VVS2', value: 'VVS2' },
	{ label: 'VVS1', value: 'VVS1' },
	{ label: 'IF', value: 'IF' },
	{ label: 'FL', value: 'FL' },
];

const SYMMETRY_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

const POLISH_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'Fair', value: 'FAIR' },
	{ label: 'Good', value: 'GOOD' },
	{ label: 'V. Good', value: 'VGOOD' },
	{ label: 'Excellent', value: 'EX' },
];

const FLUORESCENCE_OPTIONS: DiamondPropertyOption[] = [
	{ label: 'V. Strong', value: 'VSTG' },
	{ label: 'Strong', value: 'STG' },
	{ label: 'Medium', value: 'MED' },
	{ label: 'Faint', value: 'FNT' },
	{ label: 'None', value: 'NON' },
];

export function Home() {
	const [diamond, setDiamond] = useState<Diamond>({ ...UI_DEFAULTS });
	const [price, setPrice] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);

	const handleChange = (key: keyof Diamond, value: unknown) =>
		setDiamond(prev => ({ ...prev, [key]: value }));

	const handleCalculate = () => {
		const result = hybridPrice(diamond);
		setPrice(result);
	};

	return (
		<Box className="home">
			{/* <header className="header">
				<Typography variant="h6" className="logo">
					💎 Worthy
				</Typography>
				<nav>
					<ul>
						<li>Sell</li>
						<li>Buy</li>
						<li>Learn</li>
						<li>About</li>
						<li className="active">Diamond Price Calculator</li>
					</ul>
				</nav>
			</header> */}

			<Box className="calculator" width="100%">
				<Typography variant="h4" className="title">
					Diamond Price Calculator
				</Typography>

				<Stack spacing={{ xs: 1, sm: 2, md: 3 }} width="100" className="form">
					<Stack direction={{ xs: 'column', sm: 'row' }}>
						{/* Shape */}
						<ShapeSelector
							value={diamond.shape}
							onChange={(shape: Diamond['shape']) => handleChange('shape', shape)}
						/>
						Carat
						<Stack
							direction="column"
							spacing={2}
							sx={{ flex: 1, minWidth: { xs: '100%', sm: 180 } }}
						>
							<Slider
								value={diamond.carat}
								onChange={(_, v) => handleChange('carat', Number(v))}
								min={UI_RANGES.carat.min}
								max={UI_RANGES.carat.max}
								step={UI_RANGES.carat.step}
								valueLabelDisplay="auto"
							/>

							<TextField
								label="Carat"
								type="number"
								value={diamond.carat}
								onChange={e => handleChange('carat', Number(e.target.value))}
								sx={{ width: '20%' }}
							/>
							{/* <TextField
								key={key as string}
								select
								label={label as string}
								value={diamond[key as keyof Diamond]}
								onChange={e => handleChange(key as keyof Diamond, e.target.value)}
							>
								{options.map(opt => (
									<MenuItem key={opt} value={opt}>
										{opt}
									</MenuItem>
								))}
							</TextField> */}
						</Stack>
					</Stack>

					<OptionButtonsGroup
						title="Color"
						options={COLOR_OPTIONS}
						selected={diamond.color}
						onChange={(color: diamondOptions) => handleChange('color', color)}
					/>

					<OptionButtonsGroup
						title="Clarity"
						options={CLARITY_OPTIONS}
						selected={diamond.clarity}
						onChange={(clarity: diamondOptions) => handleChange('clarity', clarity)}
					/>

					<OptionButtonsGroup
						title="Cut"
						options={CUT_OPTIONS}
						selected={diamond.cut}
						onChange={(cut: diamondOptions) => handleChange('cut', cut)}
					/>

					<OptionButtonsGroup
						title="Symmetry"
						options={SYMMETRY_OPTIONS}
						selected={diamond.symmetry}
						onChange={(symmetry: diamondOptions) => handleChange('symmetry', symmetry)}
					/>

					<OptionButtonsGroup
						title="Polish"
						options={POLISH_OPTIONS}
						selected={diamond.polish}
						onChange={(polish: diamondOptions) => handleChange('polish', polish)}
					/>

					<OptionButtonsGroup
						title="Fluorescence"
						options={FLUORESCENCE_OPTIONS}
						selected={diamond.fluorescence}
						onChange={(fluorescence: diamondOptions) =>
							handleChange('fluorescence', fluorescence)
						}
					/>

					<Button variant="contained" color="primary" onClick={handleCalculate}>
						Calculate Price
					</Button>
				</Stack>

				{price !== null && (
					<Box className="result" mt={4}>
						<Typography variant="h5" className="price">
							${price.toLocaleString()}
						</Typography>
						<Typography variant="body2" className="summary">
							{diamond.carat}ct | {diamond.shape} | {diamond.cut} | {diamond.color} |{' '}
							{diamond.clarity} | {diamond.certificate}
						</Typography>
						<Button
							variant="outlined"
							sx={{ mt: 2 }}
							onClick={() => setShowModal(true)}
						>
							View Similar Diamonds
						</Button>
					</Box>
				)}
			</Box>

			<SimilarDiamondsModal
				open={showModal}
				onClose={() => setShowModal(false)}
				baseDiamond={diamond}
			/>
		</Box>
	);
}
