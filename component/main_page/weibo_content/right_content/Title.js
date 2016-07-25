import React, {Component} from 'react';

export default class Title extends React.Component {
	handleNicknameMouseover (e) {
		this.refs.myNickName.style.color = "#eb7350";
	}
	handleNicknameMouseout (e) {
		this.refs.myNickName.style.color = "#333";
	}
	componentDidMount () {
		var identifiction = document.getElementsByClassName("identifiction");
		var member = document.getElementsByClassName("member");
		var camera = document.getElementsByClassName("camera");
		!this.props.isDisplay[0] ? identifiction[0].style.display = "none" : "";
		!this.props.isDisplay[1] ? identifiction[0].style.display = "none" : "";
		!this.props.isDisplay[2] ? identifiction[0].style.display = "none" : "";
	}
	render () {
		return (
			<p className="title">
				<a href={this.props.personalPage} className="nick-name" ref="myNickName" onMouseOver={this.handleNicknameMouseover.bind(this)} onMouseOut={this.handleNicknameMouseout.bind(this)}>{this.props.nickName}</a>
				<a href="http://verified.weibo.com/verify"><i className="identifiction"></i></a>
				<a href="http://vip.weibo.com/"><i className="member"></i></a>
				<a href="http://huodong.weibo.com/pai2016?ref=icon"><i className="camera"></i></a>
			</p>
		);
	}
}