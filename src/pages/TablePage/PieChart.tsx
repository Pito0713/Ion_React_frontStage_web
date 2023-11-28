import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LoopIcon from '@mui/icons-material/Loop';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',

      ],
      borderWidth: 1,
    },
  ],
};


function PieChart() {
  return (
    <Card style={{height: '100%'}}>
      <CardActions>
        <Button size="small"><LoopIcon/>刷新</Button>
      </CardActions>
      <CardContent>
        <Pie data={data}/>
      </CardContent>
    </Card>
  );
}


export default PieChart;