import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Grid, Box } from '@mui/system';
import { Diamond } from '@src/pricingAlgorithm/diamondInterface';

export interface ShapeSelectorProps {
	value: Diamond['shape'];
	onChange: (shape: Diamond['shape']) => void;
}

const SHAPES = [
	{ name: 'Round', icon: '/src/assets/diamond-shapes/round.svg' },
	{ name: 'Princess', icon: '/src/assets/diamond-shapes/princess.svg' },
	{ name: 'Cushion', icon: '/src/assets/diamond-shapes/cushion.svg' },
	{ name: 'Emerald', icon: '/src/assets/diamond-shapes/emerald.svg' },
	{ name: 'Oval', icon: '/src/assets/diamond-shapes/oval.svg' },
	{ name: 'Pear', icon: '/src/assets/diamond-shapes/pear.svg' },
	{ name: 'Marquise', icon: '/src/assets/diamond-shapes/marquise.svg' },
	{ name: 'Radiant', icon: '/src/assets/diamond-shapes/radiant.svg' },
	{ name: 'Asscher', icon: '/src/assets/diamond-shapes/asscher.svg' },
	{ name: 'Heart', icon: '/src/assets/diamond-shapes/heart.svg' },
];

export function ShapeSelector({ value, onChange }: ShapeSelectorProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			className="shape-selector"
			sx={{
				maxWidth: '600px',
			}}
		>
			<Grid container spacing={{ xs: 1, sm: 2 }} columns={10} data-class="shape-selector">
				{SHAPES.map(s => {
					const selected = s.name === value;
					return (
						<Grid key={s.name} size={2}>
							<ButtonBase
								onClick={() => onChange(s.name as Diamond['shape'])}
								sx={{
									width: { xs: '60px', sm: '100px' },
									flexDirection: 'column',
									borderRadius: 1,
									border: selected ? '1px solid #1976d2' : '1px solid #ccc',
									backgroundColor: selected
										? 'rgba(25,118,210,0.08)'
										: 'transparent',
									p: 1.5,
									transition: '0.2s',
									'&:hover': {
										borderColor: '#1976d2',
										backgroundColor: 'rgba(25,118,210,0.04)',
									},
								}}
							>
								<Box
									component="img"
									src={s.icon}
									alt={s.name}
									sx={{
										height: isMobile ? 28 : 30,
										width: isMobile ? 28 : 30,
										opacity: selected ? 1 : 0.8,
									}}
								/>
								{!isMobile && (
									<Typography variant="body2" color="text.primary">
										{s.name}
									</Typography>
								)}
								{selected && (
									<CheckCircleIcon
										color="primary"
										sx={{
											position: 'absolute',
											top: 4,
											right: 4,
											fontSize: 16,
										}}
									/>
								)}
							</ButtonBase>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
