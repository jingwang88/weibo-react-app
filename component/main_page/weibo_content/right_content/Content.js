import React, {Component} from 'react';

export default class Source extends React.Component {
	render () {
		return (
			<p className="content">{this.props.content}</p>
		);
	}
}