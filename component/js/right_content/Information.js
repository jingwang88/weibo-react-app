import React, {Component} from 'react';

export default class Information extends React.Component {
	render () {
		return (
			<p><a className="time">{this.props.time}</a>来自<a className="source">{this.props.source}</a></p>
		);
	}
}