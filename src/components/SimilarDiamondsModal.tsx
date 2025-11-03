import { Box, Modal, Typography, Card, CardContent, CardMedia, Stack, Button } from '@mui/material';
import { Diamond } from '@pricingAlgorithm/diamondInterface';
import { hybridPrice } from '@pricingAlgorithm/pricingAlgorithm';

interface SimilarDiamondsModalProps {
	open: boolean;
	onClose: () => void;
	baseDiamond: Diamond;
}

export function SimilarDiamondsModal({ open, onClose, baseDiamond }: SimilarDiamondsModalProps) {
	// Simulate 4 random "similar" diamonds for now.
	// In a real app, you'd generate or fetch them based on the base diamond.
	const diamonds: Diamond[] = Array.from({ length: 4 }, (_, i) => ({
		...baseDiamond,
		carat: +(baseDiamond.carat * (0.9 + Math.random() * 0.2)).toFixed(2),
		color: baseDiamond.color,
		shape: baseDiamond.shape,
		cut: baseDiamond.cut,
		clarity: baseDiamond.clarity,
		price: hybridPrice(baseDiamond) * (0.9 + Math.random() * 0.2),
	}));

	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					boxShadow: 24,
					borderRadius: 2,
					width: { xs: '90%', sm: 600, md: 800 },
					maxHeight: '90vh',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
			>
				{/* Scrollable content */}
				<Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 2, sm: 4 } }}>
					<Typography variant="h6" mb={2}>
						Similar Diamonds
					</Typography>

					<Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
						{diamonds.map((d, index) => (
							<Card
								key={index}
								sx={{
									width: { xs: '100%', sm: 160 },
									textAlign: 'center',
								}}
							>
								<CardMedia
									component="img"
									height="120"
									image={`https://source.unsplash.com/200x200/?diamond,gem,${d.shape}`}
									alt="diamond"
								/>
								<CardContent>
									<Typography variant="subtitle2">
										{d.carat}ct {d.shape}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{d.cut}, {d.color}, {d.clarity}
									</Typography>
									<Typography variant="body1" fontWeight="bold" mt={1}>
										${Math.round(d.price || 0).toLocaleString()}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Box>

				{/* Fixed footer */}
				<Box
					sx={{
						position: 'sticky',
						bottom: 0,
						bgcolor: 'background.paper',
						borderTop: '1px solid',
						borderColor: 'divider',
						p: 2,
						textAlign: 'center',
					}}
				>
					<Button onClick={onClose} variant="outlined" color="primary" fullWidth>
						Close
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
