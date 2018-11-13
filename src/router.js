import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/products'
import Main from './routes/main/index'
import {hashHistory} from 'react-router'

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/com" exact component={Main}/>
        <Route path="/products" exact component={Products}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
