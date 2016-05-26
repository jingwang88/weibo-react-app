import React, {Component} from 'react';

export default class Title extends React.Component {
	render () {
		return (
			<div>
				<a href={this.props.personalPage}>{this.props.nickName}</a>
				<a href="http://verified.weibo.com/verify"><i className="identifiction"></i></a>
				<a href="http://vip.weibo.com/"><i className="member"></i></a>
				<a href="http://huodong.weibo.com/pai2016?ref=icon"><i className="camera"></i></a>
			</div>
		);
	}
}