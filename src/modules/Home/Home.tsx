// Libraries
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// Styles
import './Home.css';

const Home = () => {
  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h2" className="title">Mini Admin</Typography>
      <div className="buttons-container">
        <Button variant="contained" color="primary" href="/usuarios">
          Usuarios
        </Button>
        <Button variant="contained" color="primary" href="/ubicaciones">
          Ubicaciones
        </Button>
      </div>
    </Container>
  );
}

export default Home;
