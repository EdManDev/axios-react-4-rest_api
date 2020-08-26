import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
	baseURL: `http://localhost:5002/api/courses`,
});

class App extends Component {
	state = {
		courses: [],
	};

	constructor() {
		super();
	}
	// // GET------------------------------------
	// getCourses = async () => {
	// 	let data = await api.get("/").then(({ data }) => data);
	// 	this.setState({ courses: data });
	// };

	// GET WITH PARAM------------------------------------
	getCourses = async () => {
		let data = await api
			.get("/", {
				params: {
					_limit: 3,
					_start: 0,
				},
			})
			.then(({ data }) => data);
		this.setState({ courses: data });
	};

	// POST ------------------------------------
	createCourse = async () => {
		let res = await api.post("/", {
			title: "test",
			description: "description test",
			minimumSkill: "Now test",
		});
		console.log(res);
		this.getCourses();
	};

	// DELETE------------------------------------
	deleteCourse = async (id) => {
		let data = await api.delete(`/${id}`);
		this.getCourses();
	};

	// PUT------------------------------------
	updateCourse = async (id) => {
		let data = await api.delete(`/${id}`);
		this.getCourses();
	};

	render() {
		return (
			<div>
				<div>
					<hr />
					{this.state.courses.map((courses) => (
						<h2 key={courses.id}>{courses.title}</h2>
					))}
					<hr />
				</div>
			</div>
		);
	}
}

export default App;
