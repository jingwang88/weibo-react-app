import React, {Component} from 'react';

export default class LeftContent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isToggle: false,
			isMouseOver: false
		};
		this.top = 0;
	}
	componentDidMount () {
		let slide= document.getElementsByClassName("slide")[0],
			len = Math.floor(380/(this.props.options.length-11))+"px",
			downCategory= document.getElementsByClassName("down-category")[0];
			slide.style.height = len;
		downCategory.addEventListener("mousewheel", this.handleMouseWheel.bind(this));
	}

	componentWillUnmount () {
		downCategory.removeEventListener("mousewheel", this.handleMouseWheel.bind(this));
	}

	handleClick () {
		console.log("click");
		let downCategory= document.getElementsByClassName("down-category")[0];
		let toggleCategory= document.getElementsByClassName("toggleCategory")[0];
		let sideSlide= document.getElementsByClassName("side-slide")[0];
		this.setState({
			isToggle: !this.state.isToggle
		});
		if (!this.state.isToggle) {
			sideSlide.style.display = "block";
			downCategory.style.height = "380px";
			toggleCategory.innerText = "收起";
		} else {
			sideSlide.style.display = "none";
			downCategory.style.height = "270px";
			toggleCategory.innerText = "展开";
		}
	}

	handleMouseOver () {
		this.state.isToggle && 
		(window.onscroll = function (){
					if (document.body.scrollTop) {
						document.body.scrollTop = 0;
					} else {
						document.documentElement.scrollTop = 0;
					}
				});
		this.setState({
			isMouseOver: true
		});
	}
	handleMouseOut () {
		window.onscroll = null;
		this.setState({
			isMouseOver: false
		});
	}
	handleMouseWheel (e) {
		let slide= document.getElementsByClassName("slide")[0];
		let downList = document.getElementsByClassName("down-category-list")[0];
		let temp = this.top+(-e.wheelDelta/120)*35;
		this.state.isToggle && this.state.isMouseOver && 
		(this.top = (temp>=0 && temp<=((this.props.options.length-8)*35)) ? temp : this.top);
		slide.style.top = this.top + "px";
		downList.style.top = -this.top + "px";
		console.log(slide.style.top);
	}

	render () {
		let options = this.props.options,
			index = 1;
		return (
			<div className="left-content">
				<ul className="up-category category">
					<li>首页<em className="newWeibo newInform"> </em></li>
					<li>收藏<em className="newCollection newInform"></em></li>
					<li>赞<em className="newLike newInform"></em></li>
				</ul>
				<div className="mid-category category"><em>ì</em>热门微博<em></em></div>
				<div className="down-category category" onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
					<ul className="down-category-list">
						<li><em>C</em>好友圈</li>
						<li><em>º</em>群微博</li>
						<li><em>æ</em>特别关注</li>
						{
							options.map((option) => {
								return <li key={index++}><em>D</em>{option}</li>
							})
						}
					</ul>
					<div className="side-slide">
						<span className="slide"></span>
					</div>
				</div>
				<span className="toggleCategory" onClick={this.handleClick.bind(this)}>展开</span>
			</div>
		);
	}
}