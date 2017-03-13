import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './components/App';
import Queuing from './components/Queuing';
import Username from './components/Username';
import Game from './components/game/Game';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" history={hashHistory} component={App}>
      <IndexRoute component={Username} />
      <Route path="/queuing" component={Queuing} />
      <Route path="/game" component={Game} />
    </Route>
  </Router>,
  app
);
