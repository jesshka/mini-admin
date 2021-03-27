// Libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Material components
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// Types
import { UserActionsType } from '../../reducers/User/UserSaga';
// Styles
import './Users.css';

const headings: string[] = ['Nombre Completo', 'Género', 'Email'];

const Users = () => {

  const dispatch = useDispatch();
  const dataUsers: User[] = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    // Replace componentDidMount
    dispatch({ type: UserActionsType.FETCH_USERS });
  }, [dispatch]);


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
            {dataUsers.map((user: any, id: number) => (
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