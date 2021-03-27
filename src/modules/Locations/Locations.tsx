// Libraries
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// Styles
import './Locations.css';

const headings: string[] = ['País', 'Ciudad', 'Estado', 'Calle'];

const data: any[] = [
  { country: 'Alemania', city: 'Berlin', state: 'iswed', street: 'dwejd' },
  { country: 'Colombia', city: 'Bogotá', state: 'iwedj', street: 'qwdqwdqd' },
  { country: 'Canada', city: 'Toronto', state: 'oejwdo', street: 'sdvdfv' },
  { country: 'Francia', city: 'Paris', state: 'oiwjd', street: 'svfvdfv' },
  { country: 'Italia', city: 'Roma', state: 'oiwej', street: 'dfdfnbkj' },
];

const Locations = () => {
  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h2" className="title">Ubicaciones</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headings.map((header: string, id: number) => (
                <TableCell key={'header'+id} className="table-header-cell" align="center">{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((location: any, id: number) => (
              <TableRow key={id}>
                <TableCell align="center">{location.country}</TableCell>
                <TableCell align="center">{location.city}</TableCell>
                <TableCell align="center">{location.state}</TableCell>
                <TableCell align="center">{location.street}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Locations;