import React, {Component} from 'react';

export default class FnBanner extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			repostNumber: props.repostNumber,
			commentNumber: props.commentNumber,
			likerNumber: props.likerNumber
		};
	}
	mouseoverHandler (event) {
		let e = event || window.event;
		let target = e.target ? e.target : e.srcElement;
		if (target.className.indexOf("func") !== -1) {
			target.style.color = "#eb7350";
			target.style.cursor = "pointer";
			if (target.childNodes[0].className.indexOf("like-icon") !== -1) {
				target.childNodes[0].style.backgroundPosition = "-125px -25px";
			}
		} else if (target.className.indexOf("fn-icon") !== -1) {
			target.parentNode.style.color = "#eb7350";
			target.parentNode.style.cursor = "pointer";
			if (target.parentNode.childNodes[0].className.indexOf("like-icon") !== -1) {
				target.parentNode.childNodes[0].style.backgroundPosition = "-125px -25px";
			}
		}
	}
	mouseoutHandler (event) {
		let e = event || window.event;
		let target = e.target ? e.target : e.srcElement;
		if (target.className.indexOf("func") !== -1) {
			target.style.color = "#333";
			if (target.childNodes[0].className.indexOf("like-icon") !== -1) {
				target.childNodes[0].style.backgroundPosition = "-100px -25px";
			}
		} else if (target.className.indexOf("fn-icon") !== -1) {
			target.parentNode.style.color = "#333";
			if (target.parentNode.childNodes[0].className.indexOf("like-icon") !== -1) {
				target.parentNode.childNodes[0].style.backgroundPosition = "-100px -25px";
			}
		}
	}
	clickHandler (event) {
		console.log(event);

		let e = event || window.event;
		let target = e.target ? e.target : e.srcElement;
		switch (target.className) {
			case "repost func" : 
				this.setState({repostNumber: this.state.repostNumber+1});
				break;
			case "colle-icon fn-icon"  : 
				this.setState({repostNumber: this.state.repostNumber+1});
				break;
			case "comments func" : 
				this.setState({commentNumber: this.state.commentNumber+1});
				break;
			case "comet-icon fn-icon" : 
				this.setState({commentNumber: this.state.commentNumber+1});
				break;
			case "like func" : 
				this.setState({likerNumber: this.state.likerNumber+1});
				break;
			case "like-icon fn-icon" : 
				this.setState({likerNumber: this.state.likerNumber+1});
				break;
		}
	}
	componentDidMount () {
		window.addEventListener("mouseover", this.mouseoverHandler);
		window.addEventListener("mouseout", this.mouseoutHandler);
	}
	componentWillUnmount () {
		window.removeEventListener("mouseover", this.mouseoverHandler);
		window.removeEventListener("mouseout", this.mouseoutHandler);
	}

	render () {
		return (
			<ul className="function-banner">
				<li className="collect func" onClick={this.clickHandler.bind(this)}><em className="colle-icon fn-icon">û</em>收藏</li>
				<li className="repost func"onClick={this.clickHandler.bind(this)}><em className="repo-icon fn-icon" ></em>{this.state.repostNumber}</li>
				<li className="comments func"  onClick={this.clickHandler.bind(this)}><em className="comet-icon fn-icon"></em>{this.state.commentNumber}</li>
				<li className="like func" onClick={this.clickHandler.bind(this)}><em className="like-icon fn-icon"></em>{this.state.likerNumber}</li>
			</ul>
		);
	}
}