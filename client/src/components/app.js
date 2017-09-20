import React, { Component } from 'react';
import NavBarHeader from './nav';
import Video from './video/video';
// import BandList from '../containers/BandList';
import Signin from './auth/signin';
import ListItem from './list/new-list-item';

export default class App extends Component {
	render(){
		return (
			<div>
				<NavBarHeader />
				<Video />
				{this.props.children}
			</div>
		);
	}
}
