import { useState } from 'react';

import { SimilarDiamondsTable } from '@components/calculatorSelectors/SimilarDiamondsTable';
import { InfoOutlined } from '@mui/icons-material';
import { Box, Typography, Button, Stack, Card, useMediaQuery, useTheme, Chip } from '@mui/material';
import { UI_DEFAULTS } from '@pricingAlgorithm/diamondConfig';
import { Diamond } from '@pricingAlgorithm/diamondInterface';
import { hybridPrice } from '@pricingAlgorithm/pricingAlgorithm';
import { DiamondCalculator } from '@src/components/DIamondCalculator';
import { SimilarDiamondsModal } from '@src/components/SimilarDiamondsModal';
import { diamondOptions } from '@src/types/diamondTypes';

export function Home() {
	const [diamond, setDiamond] = useState<Diamond>({ ...UI_DEFAULTS });
	const [price, setPrice] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [similarDiamonds, setSimilarDiamonds] = useState<Diamond[]>([]);

	const handleChange = (key: keyof Diamond, value: diamondOptions | number) =>
		setDiamond(prev => ({ ...prev, [key]: value }));

	const handleCalculate = () => {
		const result = hybridPrice(diamond);
		setPrice(result);
		const diamonds: Diamond[] = Array.from({ length: 4 }, () => ({
			...diamond,
			carat: +(diamond.carat * (0.9 + Math.random() * 0.2)).toFixed(2),
			color: diamond.color,
			shape: diamond.shape,
			cut: diamond.cut,
			clarity: diamond.clarity,
			price: hybridPrice(diamond) * (0.9 + Math.random() * 0.2),
		}));

		setSimilarDiamonds(diamonds);
	};

	return (
		<Box className="home" sx={{ m: 3 }}>
			<Typography variant="h4" className="title">
				Diamond Price Calculator
			</Typography>
			{/* <header className="header">
				<Typography variant="h6" className="logo">
					💎 Worthy
				</Typography>
				<nav>
					<ul>
						<li>Sell</li>
						<li>Buy</li>
						<li>Learn</li>
						<li>About</li>
						<li className="active">Diamond Price Calculator</li>
					</ul>
				</nav>
			</header> */}
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
				<Card sx={{ width: '40%' }}>
					<Card>
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
								${price}
							</Typography>

							<Typography variant="body1" color="text.secondary" mt={0.5}>
								Radiant 2.7 Carat F VS2
							</Typography>

							<Chip
								label="Lab Grown Diamond"
								color="primary"
								variant="outlined"
								sx={{ mt: 1, fontWeight: 500, borderRadius: 1 }}
							/>
						</Stack>
					</Card>
					<SimilarDiamondsTable diamonds={similarDiamonds} />
				</Card>
			</Stack>

			{isMobile && (
				<SimilarDiamondsModal
					open={showModal}
					onClose={() => setShowModal(false)}
					diamonds={similarDiamonds}
				/>
			)}
		</Box>
	);
}
