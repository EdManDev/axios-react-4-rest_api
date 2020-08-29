import React, { Component } from "react";
import axios from "axios";

export class App_2 extends Component {
	state = {
		name: "",
	};

	componentDidMount() {
		axios.get(`http://localhost:5002/api/courses`).then((res) => {
			console.log(res);
			this.setState(res);
		});
	}

	render() {
		return (
			<div>
				<h1>hello</h1>
			</div>
		);
	}
}

export default App_2;
