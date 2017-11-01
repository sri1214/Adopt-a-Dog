import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {HashRouter, Route, Switch} from 'react-router-dom';

import css from './style.css';
import App from './components/App.js';
import RandomPet from './components/RandomPet.js';
import PetInfo from './components/PetInfo.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/random" component={RandomPet} />
          <Route path="/petInfo" component={PetInfo} />
          <Route exact path="/" component={App} />
          <Route render={function(){return <p>Page Not Found</p>}} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
