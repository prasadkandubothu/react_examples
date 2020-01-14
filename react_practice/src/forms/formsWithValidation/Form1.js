import React, { Component } from 'react';

export default class Form1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			description: '',
			topic: '',
            formErros : {
                username : '',
                password : '',
                description : '',
                topic : ''
            }
		};
	}

	usernameChangeHandler = e => {
		this.setState({ username: e.target.value });
	};

	passwordChangeHandler = e => {
		this.setState({ password: e.target.value });
	};

	descriptionChangeHandler = e => {
		this.setState({ description: e.target.value });
	};

	topicChangeHandler = e => {
		this.setState({ topic: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		alert('submit');
	};

	render() {
		return (
			<div style={{ justifyContent: 'spaceAround' }}>
				<form className="App" onSubmit={this.handleSubmit} autoComplete="off" style={{backgroundColor : 'aliceblue'}}>
					<p>
						<b>Form Components </b>
					</p>
					<div style={{ padding: '10px' }}>
						<label htmlFor="username">Username :</label>
						<input
							type="text"
							value={this.state.username}
							onChange={this.usernameChangeHandler}
							name="username"
							placeHolder="Username"
						/>
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="password">Password :</label>{' '}
						<input type="password" value={this.state.password} onChange={this.passwordChangeHandler} placeHolder="Password" name="password"/>
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="description">Description :</label>{' '}
						<textarea value={this.state.description} onChange={this.descriptionChangeHandler} placeHolder="Description" name="description"></textarea>
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="topic">Topic : </label>
						<select value={this.state.topic} onChange={this.topicChangeHandler} name="topic" >
                            <option value="">-Select-</option>
							<option value="Angular">Angular</option>
							<option value="React">React</option>
							<option value="Vue">Vue</option>
							<option value="Jquery">Jquery</option>
						</select>
					</div>
					<button type="submit"> Submit Data</button>
					<br />
					<br />
					<br />
					{JSON.stringify(this.state)}
				</form>
			</div>
		);
	}
}
