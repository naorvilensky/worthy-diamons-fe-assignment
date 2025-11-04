import { useState } from 'react';

import { Box, Typography, Button, Stack } from '@mui/material';
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

	const handleChange = (key: keyof Diamond, value: diamondOptions | number) =>
		setDiamond(prev => ({ ...prev, [key]: value }));

	const handleCalculate = () => {
		const result = hybridPrice(diamond);
		setPrice(result);
	};

	return (
		<Box className="home">
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
			<Stack direction={{ xs: 'column', sm: 'row' }}>
				<Stack>
					<DiamondCalculator diamond={diamond} handleChange={handleChange} />

					<Button variant="contained" color="primary" onClick={handleCalculate}>
						Calculate Price
					</Button>

					{price !== null && (
						<Box className="result" mt={4}>
							<Typography variant="h5" className="price">
								${price.toLocaleString()}
							</Typography>
							<Typography variant="body2" className="summary">
								{diamond.carat}ct | {diamond.shape} | {diamond.cut} |{' '}
								{diamond.color} | {diamond.clarity} | {diamond.certificate}
							</Typography>
							<Button
								variant="outlined"
								sx={{ mt: 2 }}
								onClick={() => setShowModal(true)}
							>
								View Similar Diamonds
							</Button>
						</Box>
					)}
				</Stack>
			</Stack>

			<SimilarDiamondsModal
				open={showModal}
				onClose={() => setShowModal(false)}
				baseDiamond={diamond}
			/>
		</Box>
	);
}
