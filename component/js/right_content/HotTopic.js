import React, {Component} from 'react';
import WeiboReactActions from '../../../actions/WeiboReactActions';

export default class HotTopic extends Component {
	handleRefreshClick () {
		WeiboReactActions.refreshHotTopics();
	}
	render () {
		let i = 0;
		return (
			<div className="hot-topic right_content_block">
				<div className="hot-topic-title clearfix"><p className="title">热门话题</p><p className="refresh" onClick={this.handleRefreshClick.bind(this)}><em>e</em>换一换</p></div>
				<ul className="host-topic-item">
					{
						this.props.hotTopics.map((hotTopic) => {
							return (
								<li className="item clearfix" key={i++}>
									<span className="name">#{ hotTopic.name }# </span>
									<span className="hotDegree">{ hotTopic.hotDegree}</span>
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