import React, {Component} from 'react';
import Navigator from './main_page/navigator/Navigator';
import WeiboContentLayout from './main_page/weibo_content/WeiboContentLayout';
import LeftContent from './main_page/left_content/LeftContent';
import WeiboInput from './main_page/create_weibo/WeiboInput';
import RightContent from './main_page/right_content/RightContent';
import NavigatorStore from '../stores/NavigatorStore';
import LeftContentStore from '../stores/LeftContentStore';
import MiddleContentStore from '../stores/MiddleContentStore';
import RightContentStore from '../stores/RightContentStore';
import DiscoveryPage from './discovery_page/DiscoveryPage';

function getWeiboReactState () {
	return ({
		name: NavigatorStore.getName(),
		hotWords: NavigatorStore.getHotWords(),
		hotSearchWords: NavigatorStore.getHotSearchWords(),
		options: LeftContentStore.getOptions(),
		hotWeibo: MiddleContentStore.getHotWeibo(),
		weibos: MiddleContentStore.getWeibos(),
		followNumber: RightContentStore.getStatusNumber()[0],
		followerNumber: RightContentStore.getStatusNumber()[1],
		weiboNumber: RightContentStore.getStatusNumber()[2],
		newSongList: RightContentStore.getNewSongList(),
		hotTopics: RightContentStore.getHotTopics(),
		ffriendStatus: RightContentStore.getFFriendStatus(),
		personCard: RightContentStore.getPersonCard(),
		announcements: RightContentStore.getAnnouncements()
	});
}

export default class Layout extends Component {
	constructor (props) {
		super(props);
		this.state = getWeiboReactState();
	}

	componentDidMount() {
		NavigatorStore.addChangeListener(this._onChange.bind(this));
		LeftContentStore.addChangeListener(this._onChange.bind(this));
		MiddleContentStore.addChangeListener(this._onChange.bind(this));
		RightContentStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		NavigatorStore.removeChangeListener(this._onChange.bind(this));
		LeftContentStore.removeChangeListener(this._onChange.bind(this));
		MiddleContentStore.removeChangeListener(this._onChange.bind(this));
		RightContentStore.removeChangeListener(this._onChange.bind(this));
	}
	
	render () {
		let i = 0;
		return (
			<div className="container clearfix">
			{/*	<Navigator 
					name={this.state.name}
					hotWords = {this.state.hotWords}
					hotSearchWords = {this.state.hotSearchWords}
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
						})
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
					announcements = {this.state.announcements}
				/>*/}
				<DiscoveryPage

				/>
			</div>
		);
	}
	_onChange () {
		this.setState(getWeiboReactState());
	}

}

