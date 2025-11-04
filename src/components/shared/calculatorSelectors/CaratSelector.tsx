import { useEffect, useState } from 'react';

import { Box, Slider, Stack, TextField } from '@mui/material';
import { SelectorTitle } from '@src/components/shared/SelectorTitle';
import { UI_RANGES } from '@src/pricingAlgorithm/diamondConfig';
import { Diamond } from '@src/pricingAlgorithm/diamondInterface';

export interface CaratSelectorProps {
	carat: Diamond['carat'];
	onChange: (carat: Diamond['carat']) => void;
}

export function CaratSelector({ carat, onChange }: CaratSelectorProps) {
	const [caratInput, setCaratInput] = useState(String(carat));

	useEffect(() => {
		setCaratInput(String(carat));
	}, [carat]);

	return (
		<Box>
			<SelectorTitle title="Carat" />

			<Stack
				direction="column"
				alignItems="center"
				spacing={2}
				sx={{ flex: 1, minWidth: { xs: '100%', sm: 180 }, mx: 1 }}
			>
				<TextField
					label="Carat"
					type="number"
					placeholder="1.00"
					slotProps={{
						htmlInput: {
							step: 0.01,
						},
					}}
					value={caratInput}
					onChange={e => {
						const val = e.target.value;
						setCaratInput(val);
						if (val === '') {
							return;
						}

						const num = Number(val);
						onChange(num);
					}}
					sx={{ width: '20%' }}
				/>
				<Slider
					value={carat}
					onChange={(_, v) => onChange(Number(v))}
					min={UI_RANGES.carat.min}
					max={UI_RANGES.carat.max}
					step={UI_RANGES.carat.step}
					valueLabelDisplay="auto"
				/>
			</Stack>
		</Box>
	);
}
