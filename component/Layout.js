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
				<Navigator 
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
				/>
			</div>
		);
	}
	_onChange () {
		this.setState(getWeiboReactState());
	}

}

