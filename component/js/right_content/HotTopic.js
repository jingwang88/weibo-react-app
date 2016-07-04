import React, {Component} from 'react';

export default class HotTopic extends Component {
	render () {
		return (
			<div className="hot-topic">
				<div className="hot-topic-title">热门话题</div>
				<ul className="host-topic-item">
					{
						this.props.hotTopics.map((hotTopic) => {
							return (
								<li>
									#{ hotTopic }#
								</li>
							);
						})
					}
				</ul>
				<div className="hot-topic-more more">查看更多<em className="">a</em></div>
			</div>
		);
	}
}