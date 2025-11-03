import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Slider,
  MenuItem,
  Button,
  Stack,
} from '@mui/material';
import './Home.scss';

const CUTS = ['Excellent', 'Very Good', 'Good', 'Fair'];
const COLORS = ['D', 'E', 'F', 'G', 'H', 'I', 'J'];
const CLARITIES = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];

export function Home() {
  const [carat, setCarat] = useState(1.0);
  const [cut, setCut] = useState('');
  const [color, setColor] = useState('');
  const [clarity, setClarity] = useState('');
  const [price, setPrice] = useState<number | null>(null);

  const handleCalculate = () => {
    const basePrice = 8500;
    const priceResult = basePrice * (carat / 1.0);
    setPrice(priceResult);
  };

  return (
    <Box className="home">
      <header className="header">
        <Typography variant="h6" className="logo">💎 Worthy</Typography>
        <nav>
          <ul>
            <li>Sell</li>
            <li>Buy</li>
            <li>Learn</li>
            <li>About</li>
            <li className="active">Diamond Price Calculator</li>
          </ul>
        </nav>
      </header>

      <Box className="calculator">
        <Typography variant="h4" className="title">
          Diamond Price Calculator
        </Typography>

        <Stack spacing={3} className="form">
          <TextField
            label="Carat"
            type="number"
            value={carat}
            onChange={(e) => setCarat(Number(e.target.value))}
            placeholder="Enter carat"
          />

          <Slider
            value={carat}
            onChange={(_, v) => setCarat(Number(v))}
            min={0.1}
            max={5}
            step={0.1}
            valueLabelDisplay="auto"
          />

          <TextField
            select
            label="Cut"
            value={cut}
            onChange={(e) => setCut(e.target.value)}
          >
            {CUTS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {COLORS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Clarity"
            value={clarity}
            onChange={(e) => setClarity(e.target.value)}
          >
            {CLARITIES.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            className="calculate-btn"
          >
            Calculate Price
          </Button>
        </Stack>

        {price && (
          <Box className="result">
            <Typography variant="h5" className="price">
              ${price.toLocaleString()}
            </Typography>
            <Typography variant="body2" className="summary">
              Based on {carat} Carat, {cut || 'Excellent'} Cut, {color || 'D'} Color,{' '}
              {clarity || 'FL'} Clarity
            </Typography>
            <Button variant="outlined" className="similar-btn">
              View Similar Diamonds
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
