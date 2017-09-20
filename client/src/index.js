import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Signin from './components/auth/signin';
import App from './components/app';
import reducers from './reducers';

//letting us create some routes on the front end
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin} />
			</Route>
		</Router>
	</Provider>
, document.querySelector('.container'));