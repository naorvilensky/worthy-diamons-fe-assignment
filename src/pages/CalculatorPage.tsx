import { useState } from 'react';

import { SimilarDiamondsTable } from '@components/calculatorSelectors/SimilarDiamondsTable';
import { Box, Typography, Button, Stack, Card, useMediaQuery, useTheme } from '@mui/material';
import { UI_DEFAULTS } from '@pricingAlgorithm/diamondConfig';
import { Diamond } from '@pricingAlgorithm/diamondInterface';
import { hybridPrice } from '@pricingAlgorithm/pricingAlgorithm';
import { DiamondCalculator } from '@src/components/DIamondCalculator';
import { SimilarDiamondsModal } from '@src/components/SimilarDiamondsModal';
import { PriceEstimate } from '@src/components/shared/PriceEstimate';
import { diamondOptions } from '@src/types/diamondTypes';
import { getSimilarDiamonds } from '@src/utils/similarDiamondsUtils';

export function CalculatorPage() {
	const [diamond, setDiamond] = useState<Diamond>({ ...UI_DEFAULTS });
	const [price, setPrice] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [similarDiamonds, setSimilarDiamonds] = useState<Diamond[]>([]);

	const handleChange = (key: keyof Diamond, value: diamondOptions | number) =>
		setDiamond(prev => ({ ...prev, [key]: value }));

	const handleCalculate = () => {
		const calculatedPrice = hybridPrice(diamond);
		setPrice(calculatedPrice);

		const diamonds = getSimilarDiamonds(diamond);
		console.log('Similar Diamonds:', diamonds);
		setSimilarDiamonds(diamonds);

		if (isMobile) {
			setShowModal(true);
		}
	};

	return (
		<Box className="home" sx={{ m: 3 }}>
			<Typography variant="h4" className="title">
				Diamond Price Calculator
			</Typography>
			<Stack direction={{ xs: 'column', sm: 'row' }} spacing={6}>
				<Card
					sx={{
						maxWidth: '400px',
					}}
				>
					<Stack>
						<DiamondCalculator diamond={diamond} handleChange={handleChange} />

						<Button
							variant="contained"
							color="primary"
							onClick={handleCalculate}
							sx={{ mt: 2 }}
						>
							Calculate Price
						</Button>
					</Stack>
				</Card>

				{!isMobile && (
					<Card sx={{ width: '40%' }}>
						<Card>
							<PriceEstimate price={price || 0} diamond={diamond} />
						</Card>
						<SimilarDiamondsTable diamonds={similarDiamonds} />
					</Card>
				)}
			</Stack>

			{isMobile && (
				<SimilarDiamondsModal
					open={showModal}
					onClose={() => setShowModal(false)}
					similarDiamonds={similarDiamonds}
					diamond={diamond}
					price={price || 0}
				/>
			)}
		</Box>
	);
}
