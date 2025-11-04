import {
	SHAPE_OPTIONS,
	CLARITY_OPTIONS,
	CUT_OPTIONS,
	SYMMETRY_OPTIONS,
	POLISH_OPTIONS,
	FLUORESCENCE_OPTIONS,
	ORIGIN_OPTIONS,
} from '@components/calculatorConsts';
import { InfoOutlined } from '@mui/icons-material';
import { Stack, Chip, Typography } from '@mui/material';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

export interface PriceEstimateProps {
	price: number;
	diamond: Diamond;
}

export function PriceEstimate({ price, diamond }: PriceEstimateProps) {
	return (
		<Stack direction="column" alignItems="center" sx={{ py: 2 }}>
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

			<Typography variant="body1" color="text.secondary" align="center" mt={0.5}>
				{SHAPE_OPTIONS[diamond.shape]} {diamond.carat}ct {CLARITY_OPTIONS[diamond.clarity]}{' '}
				{CUT_OPTIONS[diamond.cut]} {SYMMETRY_OPTIONS[diamond.symmetry]}{' '}
				{POLISH_OPTIONS[diamond.polish]} {FLUORESCENCE_OPTIONS[diamond.fluorescence]}
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
