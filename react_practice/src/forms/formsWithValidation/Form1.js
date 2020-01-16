import React, { Component } from 'react';

export default class Form1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			description: '',
			topic: '',
            formErrors : {
                username : '',
                password : '',
                description : '',
                topic : ''
            }
		};
	}

	formInputChangeHandler = e => {
		//this.setState({ username: e.target.value });
		e.preventDefault();
		const {name, value} = e.target;
		let formErrors = this.state.formErrors;

		switch(name){
			case "username" :
				formErrors.username = value.length < 3 && value.length > 0  ? "Minimun 3 letters are required." : "";
				break;
			case "password" :
				formErrors.password = value.length < 6 && value.length > 0 ? "Minimun 6 letters are required." : "";
				break;
			case "description" :
				formErrors.description = value.length < 6 && value.length > 0 ? "Minimun 6 letters are required." : "";
				break;
			case "topic" :
				formErrors.topic = value.length == 0 ? "Please select the Topic" : "";
				break;			
			default :
				break;
		}
		this.setState({formErrors, [name] : value});
		console.log(this.state);
	};

	// passwordChangeHandler = e => {
	// 	this.setState({ password: e.target.value });
	// };

	// descriptionChangeHandler = e => {
	// 	this.setState({ description: e.target.value });
	// };

	// topicChangeHandler = e => {
	// 	this.setState({ topic: e.target.value });
	// };

	handleSubmit = e => {
		e.preventDefault();
		//if(isFormValid(this.state))
		if(this.isFormValid(this.state))
			alert("Valid Form");
		else
			alert('Invalid Form');
	};

	isFormValid(state)
	{
		const {formErrors, ...fields} = state;
		let flag = true;

		Object.values(formErrors).forEach(err => 
			{	
			if(err.length > 0)
				flag = false;	
			}
		);

		return flag;
	}

	render() {
		const { formErrors } = this.state;
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
							onChange={this.formInputChangeHandler}
							name="username"
							placeholder="Username"
						/>
						{formErrors.username.length > 0 && (<p>{formErrors.username}</p>) }
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="password">Password :</label>{' '}
						<input type="password" value={this.state.password} onChange={this.formInputChangeHandler} placeholder="Password" name="password"/>
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="description">Description :</label>{' '}
						<textarea value={this.state.description} onChange={this.formInputChangeHandler} placeholder="Description" name="description"></textarea>
					</div>
					<div style={{ padding: '10px' }}>
						<label htmlFor="topic">Topic : </label>
						<select value={this.state.topic} onChange={this.formInputChangeHandler} name="topic" >
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
