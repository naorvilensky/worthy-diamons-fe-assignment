import { DiamondPropertyOption } from '@components/CalculatorConsts';
import { Box, Button, Grid } from '@mui/material';
import { diamondOptions } from '@src/types/diamondTypes';

import { SelectorTitle } from '../SelectorTitle';

export interface OptionButtonsSelectorProps {
	title: string;
	options: DiamondPropertyOption[];
	selected: string;
	onChange: (shape: diamondOptions) => void;
}

export function OptionButtonsSelector({
	title,
	options,
	selected,
	onChange,
}: OptionButtonsSelectorProps) {
	return (
		<Box className="option-buttons-group">
			<SelectorTitle title={title} />
			<Grid
				container
				spacing={1}
				columns={8}
				sx={{
					mx: 1,
				}}
			>
				{options.map(({ label, value }) => (
					<Grid key={value} size={2}>
						<Button
							sx={{
								width: '100%',
								whiteSpace: 'nowrap',
							}}
							key={value}
							variant={selected === value ? 'contained' : 'outlined'}
							onClick={() => onChange(value)}
						>
							{label}
						</Button>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
