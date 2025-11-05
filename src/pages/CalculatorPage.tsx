import { useState } from 'react';

import { SimilarDiamondsTable } from '@components/calculatorSelectors/SimilarDiamondsTable';
import { Box, Typography, Button, Stack, Card, useMediaQuery, useTheme } from '@mui/material';
import { hybridPrice } from '@pricingAlgorithm/pricingAlgorithm';
import { DiamondCalculator } from '@src/components/DIamondCalculator';
import { SimilarDiamondsModal } from '@src/components/SimilarDiamondsModal';
import { PriceEstimate } from '@src/components/shared/PriceEstimate';
import { UI_DEFAULTS } from '@src/config/diamondConfig';
import { Diamond } from '@src/types/diamondInterface';
import { diamondOptions } from '@src/types/diamondTypes';
import { getSimilarDiamonds } from '@utils/similarDiamondsUtils';

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
		<Box className="calculator-page" sx={{ m: 3, flex: 1, maxWidth: 1200, mx: 'auto' }}>
			<Stack width="100%" direction="column" alignItems="center" spacing={4}>
				<Typography variant="h4" className="title">
					Worthy Diamond Price Calculator
				</Typography>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					width="100%"
					alignItems="flex-start"
					justifyContent="center"
					spacing={6}
				>
					<Card
						sx={{
							flex: 1,
							height: 'auto',
							maxWidth: '400px',
						}}
					>
						<Stack>
							<DiamondCalculator diamond={diamond} handleChange={handleChange} />

							<Button
								variant="contained"
								color="primary"
								onClick={handleCalculate}
								sx={{ m: 2, p: 0.3 }}
							>
								Calculate Price
							</Button>
						</Stack>
					</Card>

					{!isMobile && (
						<Stack spacing={2} flex={1}>
							<Card>
								<PriceEstimate price={price} diamond={diamond} />
							</Card>
							<SimilarDiamondsTable diamonds={similarDiamonds} />
						</Stack>
					)}
				</Stack>
			</Stack>
			{isMobile && (
				<SimilarDiamondsModal
					open={showModal}
					onClose={() => setShowModal(false)}
					similarDiamonds={similarDiamonds}
					diamond={diamond}
					price={price}
				/>
			)}
		</Box>
	);
}
