import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import HomePosts from './containers/homePosts'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise'
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './notFound.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promise)))


ReactDOM.render(<Provider store={store}>
<BrowserRouter>
 <div style={{maxWidth: '1000px', margin: 'auto'}}>
    <div className="navbar navbar-default" style={{backgroundColor: 'coral', borderBottom: '2px solid black'}}>
          <h2>Posting Engine</h2>
    </div>
    <Switch>
     	<Route exact path="/" component={HomePosts }  />
     	<Route path="/:category"  component={HomePosts } />
     	<Route component={PageNotFound}/>
   
	</Switch>
</div>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();


