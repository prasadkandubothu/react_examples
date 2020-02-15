import React, { Component } from 'react';
import { createStore } from 'redux';
import { allReducers } from './reducers';
import UserList from './components/UserList';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

export default class ReduxDemo extends Component {
	render() {
		console.log(store.users);
		return (
			<div>
				<Provider store = {store}>
					<UserList />
				</Provider>
			</div>
		);
	}
}
