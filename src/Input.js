import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchPhrase: ""
		};
		this.addClickedClass = this.addClickedClass.bind(this);
		this.removeClickedClass = this.removeClickedClass.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(this.state.searchPhrase);
		this.removeClickedClass();
	}

	onChange(e) {
		this.addClickedClass();
		let searchPhrase = e.target.value;
		this.setState({
			searchPhrase
		});
	}

	addClickedClass() {
		let icon = document.querySelector(".icon");
		let elements = icon.querySelectorAll("*");
		elements.forEach(el => {
			el.classList.add("clicked");
		});
	}
	removeClickedClass() {
		this.setState({ searchPhrase: "" });
		let icon = document.querySelector(".icon");
		let elements = icon.querySelectorAll("*");
		elements.forEach(el => {
			el.classList.remove("clicked");
		});
	}
	render() {
		return (
			<div className="icon">
				<form onSubmit={this.onSubmit}>
					<input onClick={this.addClickedClass} onChange={this.onChange} type="text" value={this.state.searchPhrase} />
				</form>
				<div className="handle"></div>
				<button onClick={this.removeClickedClass} className="closeButton">
					<div className="close close--first"></div>
					<div className="close close--second"></div>
				</button>
			</div>
		);
	}
}

export default Input;
