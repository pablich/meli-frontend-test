import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Results from '../containers/Results';
import Product from '../containers/Product';

const Routes = () => (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/items" component={Results} />
    <Route path="/item/:id" component={Product} />
    <Route render={() => <div>404</div>} />
  </Switch>
);

export default withRouter(Routes);
