import { useCallback } from 'react';

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import {
	Box,
	Modal,
	Typography,
	Button,
	Card,
	CardContent,
	CardMedia,
	Stack,
	IconButton,
} from '@mui/material';
import { Diamond } from '@src/types/diamondInterface';
import useEmblaCarousel from 'embla-carousel-react';

import { PriceEstimate } from './shared/PriceEstimate';

interface SimilarDiamondsModalProps {
	open: boolean;
	price: number | null;
	onClose: () => void;
	diamond: Diamond;
	similarDiamonds: Diamond[];
}

export function SimilarDiamondsModal({
	open,
	onClose,
	diamond,
	similarDiamonds,
	price,
}: SimilarDiamondsModalProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true });

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
				<Box sx={{ flex: 1, p: { xs: 2, sm: 4 } }}>
					<PriceEstimate price={price} diamond={diamond} />
					{/* Carousel Container */}
					<Box sx={{ position: 'relative' }}>
						<Box
							ref={emblaRef}
							sx={{
								overflow: 'hidden',
							}}
						>
							<Box
								sx={{
									display: 'flex',
								}}
							>
								{similarDiamonds.map((d, index) => (
									<Box
										key={index}
										sx={{
											position: 'relative',
											minWidth: { xs: '80%', sm: '45%', md: '30%' },
											mr: 2,
											scrollSnapAlign: 'center',
										}}
									>
										<Card
											sx={{
												borderRadius: 2,
												boxShadow: 3,
												overflow: 'hidden',
											}}
										>
											<CardMedia
												component="img"
												height="150"
												image={`/src/assets/similar-diamonds/${d.img}`}
												alt={`${d.shape} diamond`}
											/>
											<CardContent>
												<Stack spacing={0.5} alignItems="center">
													<Typography variant="subtitle2">
														{d.carat}ct {d.shape}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{d.cut}, {d.color}, {d.clarity}
													</Typography>
													<Typography variant="body1" fontWeight="bold">
														${Math.round(d.price || 0).toLocaleString()}
													</Typography>
												</Stack>
											</CardContent>
										</Card>
									</Box>
								))}
							</Box>
						</Box>

						{/* Navigation Buttons */}
						<IconButton
							onClick={scrollPrev}
							sx={{
								position: 'absolute',
								top: '50%',
								left: 0,
								transform: 'translateY(-50%)',
								bgcolor: 'background.paper',
								boxShadow: 1,
								'&:hover': { bgcolor: 'grey.100' },
							}}
						>
							<ArrowBackIosNew fontSize="small" />
						</IconButton>
						<IconButton
							onClick={scrollNext}
							sx={{
								position: 'absolute',
								top: '50%',
								right: 0,
								transform: 'translateY(-50%)',
								bgcolor: 'background.paper',
								boxShadow: 1,
								'&:hover': { bgcolor: 'grey.100' },
							}}
						>
							<ArrowForwardIos fontSize="small" />
						</IconButton>
					</Box>
				</Box>

				{/* Footer */}
				<Box
					sx={{
						bgcolor: 'background.paper',
						borderTop: '1px solid',
						borderColor: 'divider',
						p: 2,
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
