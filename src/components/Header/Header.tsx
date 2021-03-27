// Modules
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Assets
import logo from '../../logo.svg';
// Styles
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <a className="logo-container" href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="links-container">
          <a href="/">Usuarios</a>
          <a href="/">Ubicaciones</a>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
