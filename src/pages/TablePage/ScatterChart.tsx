import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LoopIcon from '@mui/icons-material/Loop';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [300, 50, 100],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

function ScatterChart() {
  return (
    <Card style={{height: '100%'}}>
      <CardActions>
        <Button size="small"><LoopIcon/>刷新</Button>
      </CardActions>
      <CardContent>
      <Scatter options={options} data={data} />
      </CardContent>
    </Card>
  );
}

export default ScatterChart;

