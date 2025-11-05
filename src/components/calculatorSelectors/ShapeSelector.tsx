import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ButtonBase, useMediaQuery, useTheme } from '@mui/material';
import { Grid, Box } from '@mui/system';
import { SelectorTitle } from '@src/components/shared/SelectorTitle';
import { Diamond } from '@src/types/diamondInterface';

export interface ShapeSelectorProps {
	selected: Diamond['shape'];
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

export function ShapeSelector({ selected, onChange }: ShapeSelectorProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			className="shape-selector"
			sx={{
				maxWidth: '600px',
			}}
		>
			<SelectorTitle title="Shape" />

			<Grid
				container
				spacing={1}
				sx={{
					mx: 1,
				}}
				columns={5}
				data-class="shape-selector"
			>
				{SHAPES.map(s => {
					const isSelected = s.name === selected;
					return (
						<Grid key={s.name} size={1}>
							<ButtonBase
								onClick={() => onChange(s.name as Diamond['shape'])}
								sx={{
									width: '100%',
									flexDirection: 'column',
									borderRadius: 1,
									border: isSelected ? '1px solid #1976d2' : '1px solid #ccc',
									backgroundColor: isSelected
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
										height: isMobile ? 28 : 20,
										width: isMobile ? 28 : 20,
										opacity: isSelected ? 1 : 0.8,
									}}
								/>
								{!isMobile && <div color="text.primary">{s.name}</div>}
								{isSelected && (
									<CheckCircleIcon
										color="primary"
										sx={{
											position: 'absolute',
											top: 4,
											right: 4,
											fontSize: 8,
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
