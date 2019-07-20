import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing';
import Result from './result';

function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path='/Result' component={Result} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </React.Fragment>
  );
}

export default App;
