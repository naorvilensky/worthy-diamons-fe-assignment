import { Card, CardMedia, Typography, Stack, Box } from '@mui/material';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

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
							src={`https://source.unsplash.com/100x100/?diamond,${d.shape}`}
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
						<Typography fontWeight={600}>{d.carat.toFixed(2)}</Typography>

						<Typography fontWeight={600}>{d.clarity}</Typography>

						<Typography fontWeight={600}>{d.color}</Typography>

						<Typography fontWeight={600}>{d.origin}</Typography>

						<Typography fontWeight={600} color="primary">
							${Math.round(d.price || 0).toLocaleString()}
						</Typography>
					</Stack>
				</Card>
			))}
		</Box>
	);
}
