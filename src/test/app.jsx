import React, { Component } from "react";
import axios from "axios";

class app extends Component {
	state = {
		name: "",
	};

	handleChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleSubmit = (event) => {
		// event.preventDefault();

		// const user = {
		// 	name: this.state.name,
		// };

		// DELETE REQUEST BELOW
		this.setState({ id: event.target.value });

		axios
			// .post(`https://jsonplaceholder.typicode.com/users`, { user })

			// DELETE REQUEST BELOW
			.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Person Name:
						<input type="text" name="name" onChange={this.handleChange} />
					</label>
					{/* <button type="submit">Add</button> */}

					{/* DELETE REQUEST BELOW */}
					<button type="submit">Delete</button>
				</form>
			</div>
		);
	}
}

export default app;
