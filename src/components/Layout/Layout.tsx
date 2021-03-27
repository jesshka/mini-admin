// Modules
import Header from '../Header/Header';
// Styles
import './Layout.css';

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      { children }
    </div>
  );
}

export default Layout;