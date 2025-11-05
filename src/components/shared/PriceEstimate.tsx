import { ORIGIN_OPTIONS } from '@components/calculatorConsts';
import { InfoOutlined } from '@mui/icons-material';
import { Stack, Chip, Typography } from '@mui/material';
import { Diamond } from '@src/types/diamondInterface';

export interface PriceEstimateProps {
	price: number | null;
	diamond: Diamond;
}

export function PriceEstimate({ price, diamond }: PriceEstimateProps) {
	return (
		<Stack direction="column" alignItems="center" sx={{ p: 4 }}>
			<Typography
				variant="subtitle1"
				fontWeight={600}
				display="inline-flex"
				alignItems="center"
				gap={0.5}
			>
				Fair Price Estimate
				<InfoOutlined fontSize="small" color="action" />
			</Typography>

			<Typography variant="h3" fontWeight={700} mt={0.5}>
				{price !== null ? `$${price.toLocaleString()}` : '---'}
			</Typography>

			<Chip
				label={ORIGIN_OPTIONS[diamond.origin]}
				color={diamond.origin === 'NATURAL' ? 'primary' : 'secondary'}
				variant="outlined"
				sx={{ mt: 1, fontWeight: 500, borderRadius: 1 }}
			/>
		</Stack>
	);
}
