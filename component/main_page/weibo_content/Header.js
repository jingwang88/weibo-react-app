import React, {Component} from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<img src={this.props.img} className="header"/>
		);
	}
}