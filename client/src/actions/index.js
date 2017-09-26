import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
	AUTH_USER, 
	UNAUTH_USER,
	AUTH_ERROR, 
	CREATE_POSTS, 
	FETCH_POSTS, 
	FETCH_POST, 
	DELETE_POST, 
	UPDATE_POST 
} from './types';
import authReducer from '../reducers/auth_reducer';

//const ROOT_URL = 'http://rest.learncode.academy/api/paul';
const ROOT_URL = 'http://localhost:3000';

let config = {
	headers: { authorization: null }
}

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, { email, password })
		.then(response => {
			//This only kickstarts if the request was good ...
			//We now update the state to indi ate authenticated user
			dispatch({ type: AUTH_USER });
			//This will put the token in localStorage. It's safe!!

			config.headers.authorization = response.data.token;

			localStorage.setItem('token', response.data.token);
			//This sends us off to the /newitem view.
			browserHistory.push('/newitem');
		}).catch(response => dispatch(authError("There was something wrong with your request.")));
	};
};

export function signupUser({ email, password }){
	return function(dispatch){
		//Submit email/password to the server
		axios.post(`${ROOT_URL}/signup`, { email, password})
		.then(response => {
			dispatch({ type: AUTH_USER });

			config.headers.authorization = response.data.token;
			
			//update the token
			localStorage.setItem('token', response.data.token);
			browserHistory.push('/newitem');
		})
		.catch(response => dispatch(authError(response.data.error)));
	}
}

export function createPost(props) {
	return function(dispatch){
		axios.post(`${ROOT_URL}/newitem`, { props }, config )

		.then(request => {
			dispatch({
				type: CREATE_POSTS,
				payload: request
			});

		browserHistory.push('/items');
		
		});
	}
}

export function fetchPosts(){
	return function(dispatch){
		axios.get(`${ROOT_URL}/items`, config)

		.then((response) => {
			// console.log("Response", response)

			dispatch({
				type: FETCH_POSTS,
				payload: response
				
			});
		});
	}
}

export function fetchPost(id){
	return function(dispatch) {
		axios.get(`${ROOT_URL}/items/${id}`, config)

		.then((response) => {
			console.log("Response: ", response)
			dispatch({
				type: FETCH_POST,
				payload: response
			});
		});
	}
}

export function deletePost(id){
	return function(dispatch) {
		axios.delete(`${ROOT_URL}/items/${id}`, config)
		.then((response) => {
			dispatch({
				type: DELETE_POST,
				payload: response
			});
			browserHistory.push('/items');
		});
	}
}

export function updatePost(props, id){
	return function(dispatch){
		axios.put(`${ROOT_URL}/items/${id}`, { props }, config)

		.then(response => {
			dispatch({
				type: UPDATE_POST,
				payload: response
			});
			browserHistory.push('/items');
		});
	}
}

export function signoutUser(){
	localStorage.removeItem('token');

	return {type: UNAUTH_USER};
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}




