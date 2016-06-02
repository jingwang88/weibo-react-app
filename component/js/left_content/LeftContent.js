import React, {Component} from 'react';

export default class LeftContent extends React.Component {

	render () {
		return (
			<div className="leftContent">
				<ul className="up-category category">
					<li>首页<em></em></li>
					<li>收藏<em></em></li>
					<li>赞<em></em></li>
				</ul>
				<div className="mid-category category"><em>ì</em>热门微博<em></em></div>
				<div className="down-category category">
					<ul>
						<li><em>C</em>好友圈</li>
						<li><em>º</em>群微博</li>
						<li><em>æ</em>特别关注</li>
						<li><em>D</em>{this.props.options[0]}</li>
						<li><em>D</em>{this.props.options[1]}</li>
						<li><em>D</em>{this.props.options[2]}</li>
						<li><em>D</em>{this.props.options[3]}</li>
						<li><em>D</em>{this.props.options[4]}</li>
					</ul>
					<span>展开</span>
				</div>
			</div>
		);
	}
}