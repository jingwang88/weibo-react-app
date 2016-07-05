import React, {Component} from 'react';

export default class HotTopic extends Component {
	render () {
		return (
			<div className="hot-topic clearfix">
				<div className="hot-topic-title"><p className="title clearfix">热门话题</p><p className="refresh clearfix"><em>e</em>换一换</p></div>
				<ul className="host-topic-item">
					{
						this.props.hotTopics.map((hotTopic) => {
							return (
								<li>
									<span>#{ hotTopic.title }# </span><span>{ hotTopic.hotDegree}</span>
								</li>
							);
						})
					}
				</ul>
				<div className="hot-topic-more more">查看更多<em>a</em></div>
			</div>
		);
	}
}