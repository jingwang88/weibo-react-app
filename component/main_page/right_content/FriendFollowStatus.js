import React, {Component} from 'react';
require('./right_content_friendFollowStatus.less');

export default class FriendFollowStatus extends Component {
	render () {
		return (
			<div className="friend-follow-stauts  right_content_block">
				<div className="ffollow-stauts-title">好友关注动态</div>
				<span className="ffollow-stauts-titleImg"></span>
				<ul className="ffollow-stauts-item">
					<li className="latest-follow item">
						<p><span className="person">{this.props.ffriendStatus.latestFollower}</span>等<span>{this.props.ffriendStatus.latestFollowerNum}</span>人关注了</p>
						<div className="simple-personCard">
							<img src={this.props.personCard[0].headerPic}/>
							<div className="personCard-info">
								<span  className="person">{this.props.personCard[0].id}</span>
								<span>{this.props.personCard[0].description}</span>
							</div>
							<span className="follow"><em>+</em>关注</span>
						</div>
					</li>
					<li className="today-recommend item">
						<p>今日推荐</p>
						<div className="simple-personCard">
							<img src={this.props.personCard[1].headerPic}/>
							<div className="personCard-info">
								<span  className="person">{this.props.personCard[1].id}</span>
								<span>{this.props.personCard[1].description}</span>
							</div>
							<span className="follow"><em>+</em> 关注</span>
						</div>
					</li>
					<li className="you-follow item">
						<p><span  className="person">{this.props.ffriendStatus.youFollow}</span>也关注</p>
						<div className="simple-personCard">
							<img src={this.props.personCard[2].headerPic}/>
							<div className="personCard-info">
								<span className="person">{this.props.personCard[2].id}</span>
								<span>{this.props.personCard[2].description}</span>
							</div>
							<span className="follow"><em>+</em> 关注</span>
						</div>
					</li>
					<li className="you-like item">
						<p>你赞过他的微博</p>
						<div className="simple-personCard">
							<img src={this.props.personCard[3].headerPic}/>
							<div className="personCard-info">
								<span  className="person">{this.props.personCard[3].id}</span>
								<span>{this.props.personCard[3].description}</span>
							</div>
							<span className="follow"><em>+</em> 关注</span>
						</div>
					</li>
				</ul>
				<div className="ffollow-stauts-more more">查看更多<em className="">a</em></div>
			</div>
		);
	}
}