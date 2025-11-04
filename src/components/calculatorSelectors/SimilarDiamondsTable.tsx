import { Card, CardMedia, Typography, Stack, Box } from '@mui/material';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

import { CLARITY_OPTIONS, COLOR_OPTIONS, ORIGIN_OPTIONS } from '../calculatorConsts';

interface SimilarDiamondsTableProps {
	diamonds: Diamond[];
}

export function SimilarDiamondsTable({ diamonds }: SimilarDiamondsTableProps) {
	if (!diamonds?.length) return null;

	// Utility inside component — creates a unique ID for each diamond
	const buildDiamondId = (d: Diamond): string => {
		return [
			d.shape,
			d.cut,
			d.color,
			d.clarity,
			d.polish,
			d.symmetry,
			d.fluorescence,
			d.origin,
			d.carat,
			d.price ?? 0,
		].join('|');
	};

	return (
		<Box sx={{ mt: 4 }}>
			{diamonds.map(d => (
				<Card
					key={buildDiamondId(d)}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						p: 1.5,
						mb: 2,
						boxShadow: 1,
						border: '1px solid black',
					}}
				>
					{/* Left side: image and basic info */}
					<Stack
						direction="row"
						justifyContent="space-around"
						alignItems="center"
						flex={1}
					>
						<CardMedia
							component="img"
							src={`/src/assets/similar-diamonds/${d.img}`}
							alt={`${d.shape} diamond`}
							sx={{
								width: 64,
								height: 64,
								borderRadius: 1,
								objectFit: 'cover',
								bgcolor: '#f8f8f8',
							}}
						/>

						{/* Diamond properties */}
						<Typography fontWeight={600}>{d.carat.toFixed(2)}ct</Typography>

						<Typography fontWeight={600}>{CLARITY_OPTIONS[d.clarity]}</Typography>

						<Typography fontWeight={600}>{COLOR_OPTIONS[d.color]}</Typography>

						<Typography fontWeight={600}>{ORIGIN_OPTIONS[d.origin]}</Typography>

						<Typography fontWeight={600} color="primary">
							${Math.round(d.price || 0).toLocaleString()}
						</Typography>
					</Stack>
				</Card>
			))}
		</Box>
	);
}
