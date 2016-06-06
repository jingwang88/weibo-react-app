import React, {Component} from 'react';

export default class PersonCard extends Component {
	render () {
		return (
			<div class="person-info-card">
				<div className="up-background"><div>
				<div className="head-picture"></div>
				<div className="down-info">
					<div>青春如歌<em></em><em></em><span></span></div>
					<ul>
						<li className=""><span>{this.props.followNumber}</span><span>关注</span></li>
						<li><span>{this.props.followerNumber}</span><span>粉丝</span></li>
						<li><span>{this.props.weiboNumber}</span><span>微博</span></li>
					</ul>
				</div>
			</div>
		);
	}
}