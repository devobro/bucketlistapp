import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import App from './components/app';
import reducers from './reducers';
import RequireAuth from './components/auth/require_auth';
import ListItem from './components/list/new-list-item';
import ListsShow from './components/list/list-items';
import ListShow from './components/list/list-show';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types'

//letting us create some routes on the front end
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin} />
				<Route path="signout" component={Signout} />
				<Route path="signup" component={Signup} />
				<Route path="newitem" component={RequireAuth(ListItem)} />
				<Route path="items" component={RequireAuth(ListsShow)} />
				<Route path="items/:id" component={RequireAuth(ListShow)} />
			</Route>
		</Router>
	</Provider>
, document.querySelector('.container'));