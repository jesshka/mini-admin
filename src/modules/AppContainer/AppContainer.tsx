
// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Modules
import Home from '../../modules/Home/Home';
import Locations from '../../modules/Locations/Locations';
import Users from '../../modules/Users/Users';
// Components
import Layout from '../../components/Layout/Layout';
// Styles
import './AppContainer.css';

class AppContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ubicaciones" component={Locations} />
            <Route exact path="/usuarios" component={Users} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
