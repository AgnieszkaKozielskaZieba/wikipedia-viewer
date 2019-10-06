import React, { Component } from "react";
import ResultCard from "./ResultCard";
import "./Results.css";

class Results extends Component {
	render() {
		let { results } = this.props;
		let resultsDisplay = results.map((r, i) => <ResultCard key={i} result={r} />);
		return <div className="ResultsDisplay">{resultsDisplay}</div>;
	}
}

export default Results;
