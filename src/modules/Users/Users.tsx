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
import './Users.css';

const headings: string[] = ['Nombre Completo', 'Género', 'Email'];

const data: any[] = [
  { firstName: 'Candy Octavia', lastName: 'Walters', gender: 'female', email: 'candy@yopmail.com' },
  { firstName: 'Owen', lastName: 'Love', gender: 'male', email: 'owen@yopmail.com' },
  { firstName: 'Otis Star', lastName: 'Cruz', gender: 'other', email: 'otis@yopmail.com' },
  { firstName: 'Lynda', lastName: 'Newton', gender: 'female', email: 'lynda@yopmail.com' },
  { firstName: 'Charissa', lastName: 'Wells', gender: 'female', email: 'charissa@yopmail.com' },
];

const Users = () => {
  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h2" className="title">Usuarios</Typography>
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
            {data.map((user: any, id: number) => (
              <TableRow key={user.firstName + id}>
                <TableCell component="th" scope="row" align="center">
                  {`${user.firstName} ${user.lastName}`}
                </TableCell>
                <TableCell align="center">{user.gender}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Users;