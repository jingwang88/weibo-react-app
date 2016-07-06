import React, {Component} from 'react';

export default class PersonCard extends Component {
	render () {
		return (
			<div className="person-info-card right_content_block">
				<div className="up-background"></div>
				<div className="down-info">
					<div className="head-picture"><img src="../component/source/head.jpg"/></div>
					<div className="nick-vip-level"><span className="nick">青春如歌</span><em className="vip"></em><span className="level">LV.14</span></div>
					<ul className="follow-follower-weibo-nums">
						<li className="follow"><span className="numbers">{this.props.followNumber}</span><span className="keyword">关注</span></li>
						<li className="follower"><span className="numbers">{this.props.followerNumber}</span><span className="keyword">粉丝</span></li>
						<li className="weibo"><span className="numbers">{this.props.weiboNumber}</span><span className="keyword">微博</span></li>
					</ul>
				</div>
			</div>
		);
	}
}


