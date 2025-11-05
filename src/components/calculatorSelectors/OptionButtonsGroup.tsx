import { SelectorTitle } from '@components/shared/SelectorTitle';
import { Box, Button, Grid } from '@mui/material';
import { DiamondPropertyOption } from '@src/components/calculatorConsts';
import { diamondOptions } from '@src/types/diamondTypes';

export interface OptionButtonsSelectorProps {
	title: string;
	options: DiamondPropertyOption;
	selected: string;
	onChange: (option: diamondOptions) => void;
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
				{Object.entries(options).map(([value, label]) => (
					<Grid key={value} size={2}>
						<Button
							size="small"
							sx={{
								width: '100%',
								whiteSpace: 'nowrap',
								p: 0.1,
							}}
							variant={selected === value ? 'contained' : 'outlined'}
							onClick={() => onChange(value as diamondOptions)}
						>
							{label}
						</Button>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
