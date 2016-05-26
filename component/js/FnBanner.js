import React, {Component} from 'react';

export default class FnBanner extends React.Component {
	render () {
		return (
			<ul className="function-banner">
				<li className="collect">收藏</li>
				<li className="repost">{this.props.repostNumber}</li>
				<li className="comments">{this.props.commentNumber}</li>
				<li className="like">{this.props.likerNumber}</li>
			</ul>
		);
	}
}