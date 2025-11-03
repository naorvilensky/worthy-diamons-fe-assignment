import { Box, Button, Grid, Typography } from '@mui/material';
import { DiamondPropertyOption } from '@pages/Home/Home';
import { diamondOptions } from '@src/types/diamondTypes';

export interface OptionButtonsGroupProps {
	title: string;
	options: DiamondPropertyOption[];
	selected: string;
	onChange: (shape: diamondOptions) => void;
}

export function OptionButtonsGroup({
	title,
	options,
	selected,
	onChange,
}: OptionButtonsGroupProps) {
	return (
		<Box className="option-buttons-group">
			<Typography
				sx={{
					mx: 1,
					mb: 1,
				}}
			>
				{title}
			</Typography>
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
