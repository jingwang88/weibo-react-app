import React, {Component} from 'react';

export default class Information extends React.Component {
	handleTimeMouseover (e) {
		this.style.color = "#eb7350";
	}
	handleTimeMouseout (e) {
		this.refs.time.style.color = "#333";
	}
	render () {
		return (
			<p className="information"><a className="time" ref="time">{this.props.time}</a> 来自 <a className="source">{this.props.source}</a></p>
		);
	}
}