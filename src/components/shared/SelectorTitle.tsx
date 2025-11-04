import { Typography } from '@mui/material';

export interface SelectorTitleProps {
	title: string;
}
export function SelectorTitle({ title }: SelectorTitleProps) {
	return (
		<Typography
			sx={{
				mx: 1,
				mb: 1,
			}}
		>
			{title}
		</Typography>
	);
}
