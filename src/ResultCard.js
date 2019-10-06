import React, { Component } from "react";
import "./ResultCard.css";

class ResultCard extends Component {
	render() {
		let link = "https://en.wikipedia.org/?curid=";
		let { pageid, title, snippet } = this.props.result;
		let snippetDisplay = <p dangerouslySetInnerHTML={{ __html: snippet }}></p>;
		return (
			<a className="ResultCard" href={link + pageid} target="_blank">
				<h3>{title}</h3>
				{snippetDisplay}
			</a>
		);
	}
}

export default ResultCard;
