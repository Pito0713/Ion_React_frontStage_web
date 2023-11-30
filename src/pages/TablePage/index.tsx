import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
interface Props {
  window?: () => Window;
}
export default function TablePage(props: Props) {

  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  console.log(container)
  return (

      <Box  >
   
      <Grid container direction={{md:'row' , xs: 'column'}} spacing={3} style={{marginBottom: 21 }}>
        <Grid item xs>
          <Card style={{ height: 150 }}>123</Card>
        </Grid>
        <Grid item xs>
          <Card style={{ height: 150 }}>123</Card>
        </Grid>
        <Grid item xs>
          <Card style={{ height: 150}}>123</Card>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={3} direction={{md:'row' , xs: 'column'}} style={{marginBottom: 21 }}>
          <Grid item xs={4} md={3}>
            <PieChart />
          </Grid>
          <Grid item xs={4} md={5}>
            <BarChart />
          </Grid>
          <Grid item xs={4} md={4}>
            <ScatterChart />
          </Grid>
        </Grid>
      </Box>
      <Card style={{ marginTop: '10px' }}>
        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      </Box>

  );
}
