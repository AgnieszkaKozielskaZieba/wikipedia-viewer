import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Results from "./Results";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(searchPhrase) {
		let str = searchPhrase.replace(" ", "%20");
		fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${str}&format=json`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({ searchResults: data.query.search });
			})
			.catch(err => console.log(err));
	}

	render() {
		// let results=this.state.map(r=>)
		return (
			<div className="App">
				<a className="FeelingLucky" target="#" href="https://en.wikipedia.org/wiki/Special:Random">
					Feeling lucky :)
				</a>
				or click icon to search:
				<Input handleSubmit={this.handleSubmit} />
				<Results results={this.state.searchResults} />
			</div>
		);
	}
}

export default App;
