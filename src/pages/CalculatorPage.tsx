import { useState } from 'react';

import { SimilarDiamondsTable } from '@components/calculatorSelectors/SimilarDiamondsTable';
import { Box, Typography, Button, Stack, Card, useMediaQuery, useTheme } from '@mui/material';
import { DiamondCalculator } from '@src/components/DIamondCalculator';
import { SimilarDiamondsModal } from '@src/components/SimilarDiamondsModal';
import { PriceEstimate } from '@src/components/shared/PriceEstimate';
import { UI_DEFAULTS } from '@src/config/diamondConfig';
import { calculatePrice } from '@src/pricingAlgorithm/pricingAlgorithm';
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
		const calculatedPrice = calculatePrice(diamond);
		setPrice(calculatedPrice);

		const diamonds = getSimilarDiamonds(diamond);
		setSimilarDiamonds(diamonds);

		if (isMobile) {
			setShowModal(true);
		}
	};

	return (
		<Box className="calculator-page" sx={{ m: 3, flex: 1, maxWidth: 1200, mx: 'auto' }}>
			<Stack width="100%" direction="column" alignItems="center" spacing={4}>
				<Typography variant="h2" className="title" sx={{ textAlign: 'center', mb: 2 }}>
					Worthy Diamond Price Calculator
				</Typography>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					width="100%"
					alignItems="flex-start"
					justifyContent="center"
					spacing={6}
				>
					<Stack>
						<Typography variant="h2" sx={{ mb: 1 }}>
							Calculator Input
						</Typography>
						<Card
							sx={{
								flex: 1,
								height: 'auto',
								maxWidth: '400px',
								pt: 1,
							}}
						>
							<DiamondCalculator diamond={diamond} handleChange={handleChange} />

							<Stack direction="row" justifyContent="center">
								<Button
									variant="contained"
									color="info"
									onClick={handleCalculate}
									sx={{ flex: 1, m: 2, p: 0.3 }}
								>
									Calculate Price
								</Button>
							</Stack>
						</Card>
					</Stack>

					{!isMobile && (
						<Stack flex={1}>
							<Typography variant="h2" sx={{ mb: 1 }}>
								Calculator Output
							</Typography>
							<Card className="price-estimate-card" sx={{ mt: 0 }}>
								<PriceEstimate price={price} diamond={diamond} />
							</Card>
							{similarDiamonds?.length > 0 && (
								<SimilarDiamondsTable diamonds={similarDiamonds} />
							)}
							{!similarDiamonds?.length && (
								<Card
									sx={{
										py: 4,
										textAlign: 'center',
										color: 'text.secondary',
										mt: 2,
									}}
								>
									<Typography variant="body1">
										💎 Similar diamonds will appear here after you calculate a
										price.
									</Typography>
								</Card>
							)}
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
