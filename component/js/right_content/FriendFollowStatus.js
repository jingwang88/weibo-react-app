import React, {Component} from 'react';

export default class FriendFollowStatus extends Component {
	render () {
		return (
			<div className="friend-follow-stauts">
				<div className="ffollow-stauts-title">好友关注动态</div>
				<img src="#"/>
				<ul>
					<li>
						<p>{this.props.ffriendStatus.latestFollower}等{this.props.ffriendStatus.latestFollowerNum}人关注了</p>
						<div>
							<img />
							<div>
								<span></span>
								<span></span>
							</div>
							<span><em></em> 关注</span>
						</div>
					</li>
					<li>
						<p>今日推荐</p>
						<div>
							<img />
							<div>
								<span></span>
								<span></span>
							</div>
							<span><em></em> 关注</span>
						</div>
					</li>
					<li>
						<p>{this.props.ffriendStatus.youFollow}也关注</p>
						<div>
							<img />
							<div>
								<span></span>
								<span></span>
							</div>
							<span><em></em> 关注</span>
						</div>
					</li>
					<li>
						<p>你赞过他的微博</p>
						<div>
							<img />
							<div>
								<span></span>
								<span></span>
							</div>
							<span><em></em> 关注</span>
						</div>
					</li>
				</ul>
				<div className="ffollow-stauts-more more">查看更多<em className="">a</em></div>
			</div>
		);
	}
}