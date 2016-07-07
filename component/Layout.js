import React, {Component} from 'react';
import Navigator from './js/navigator/Navigator';
import WeiboContentLayout from './js/weibo_content/WeiboContentLayout';
import LeftContent from './js/Left_content/LeftContent';
import WeiboInput from './js/create_weibo/WeiboInput';
import RightContent from './js/right_content/RightContent';
import NavigatorStore from '../stores/NavigatorStore';
import LeftContentStore from '../stores/LeftContentStore';
import MiddleContentStore from '../stores/MiddleContentStore';
import RightContentStore from '../stores/RightContentStore';

function getWeiboReactState () {
	return ({
		name: NavigatorStore.getName(),
		options: LeftContentStore.getOptions(),
		hotWeibo: MiddleContentStore.getHotWeibo(),
		weibos: MiddleContentStore.getweibos(),
		followNumber: RightContentStore.getStatusNumber()[0],
		followerNumber: RightContentStore.getStatusNumber()[1],
		weiboNumber: RightContentStore.getStatusNumber()[2],
		newSongList: RightContentStore.getNewSongList(),
		hotTopics: RightContentStore.getHotTopics(),
		ffriendStatus: RightContentStore.getFFriendStauts(),
		personCard: RightContentStore.getPersonCard(),
		announcements: RightContentStore.getAnnouncements()
	});
}
export default class Layout extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount() {
		NavigatorStore.addChangeListener(this._onChange);
		LeftContentStore.addChangeListener(this._onChange);
		MiddleContentStore.addChangeListener(this._onChange);
		RightContentStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		NavigatorStore.removeChangeListener(this._onChange);
		LeftContentStore.removeChangeListener(this._onChange);
		MiddleContentStore.removeChangeListener(this._onChange);
		RightContentStore.removeChangeListener(this._onChange);
	}

	render () {
		let i = 0;
		return (
			<div className="container clearfix">
				<Navigator 
					name={this.state.name}
				/>
				<LeftContent 
					options={this.state.options}
				/>
				<div className="middle-content">
					<WeiboInput hotWeibo={this.state.hotWeibo}/>
					{
						this.state.weibos.map((weibo) => {
							return (
								<WeiboContentLayout weiboContent={weibo} key={++i}></WeiboContentLayout>
							);
						});
					}
				</div>
				<RightContent 
					followNumber={this.state.followNumber} 
					followerNumber={this.state.followerNumber}
					weiboNumber={this.state.weiboNumber}
					newSongList={this.state.newSongList}
					hotTopics={this.state.hotTopics}
					ffriendStatus={this.state.ffriendStatus}
					personCard={this.state.personCard}
				/>
			</div>
		);
	}
	_onChange () {
		this.setState({
			getWeiboReactState()
		});
	}
}

