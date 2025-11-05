import { SelectorTitle } from '@components/shared/SelectorTitle';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ORIGIN_OPTIONS } from '@src/components/calculatorConsts';
import { Diamond } from '@src/types/diamondInterface';

export interface OriginSelectorProps {
	selected: string;
	onChange: (origin: Diamond['origin']) => void;
}

export function OriginSelector({ selected, onChange }: OriginSelectorProps) {
	return (
		<Box className="option-buttons-group">
			<SelectorTitle title="Origin" />
			<Grid
				container
				spacing={1}
				columns={2}
				sx={{
					mx: 1,
				}}
			>
				{Object.entries(ORIGIN_OPTIONS).map(([value, label]) => (
					<Grid key={value} size={1}>
						<Button
							sx={{
								width: '100%',
								whiteSpace: 'nowrap',
							}}
							key={value}
							variant={selected === value ? 'contained' : 'outlined'}
							onClick={() => onChange(value as Diamond['origin'])}
						>
							<Typography variant="caption">{label}</Typography>
						</Button>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
