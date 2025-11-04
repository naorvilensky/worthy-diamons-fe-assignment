import { Box, Modal, Typography, Card, CardContent, CardMedia, Stack, Button } from '@mui/material';
import { Diamond } from '@pricingAlgorithm/diamondInterface';

interface SimilarDiamondsModalProps {
	open: boolean;
	onClose: () => void;
	diamonds: Diamond[];
}

export function SimilarDiamondsModal({ open, onClose, diamonds }: SimilarDiamondsModalProps) {
	// Simulate 4 random "similar" diamonds for now.
	// In a real app, you'd generate or fetch them based on the base diamond.

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
							<Card key={index}>
								<CardMedia
									component="img"
									height="120"
									image={`https://source.unsplash.com/200x200/?diamond,gem,${d.shape}`}
									alt="diamond"
								/>
								<CardContent>
									<Stack direction="row" spacing={2}>
										<Typography variant="subtitle2">
											{d.carat}ct {d.shape}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{d.cut}, {d.color}, {d.clarity}
										</Typography>
										<Typography variant="body1" fontWeight="bold" mt={1}>
											${Math.round(d.price || 0).toLocaleString()}
										</Typography>
									</Stack>
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
