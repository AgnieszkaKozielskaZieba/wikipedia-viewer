import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchPhrase: "",
      clicked: false
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
		this.setState({ clicked: true });
	}
	removeClickedClass() {
		this.setState({ searchPhrase: "", clicked: false });
	}
	render() {
		const { clicked } = this.state;
		return (
			<div className={`icon ${clicked ? 'clicked' : ''}`}>
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
