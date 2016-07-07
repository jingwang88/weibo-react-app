import React, {Component} from 'react';
import PersonCard from './PersonCard.js';
import NewSongList from './NewSongList.js';
import HotTopic from './HotTopic.js';
import FriendFollowStatus from './FriendFollowStatus.js';
import Announcement from './Announcement.js';

export default class RightContent extends Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div className="right-content">
				<PersonCard followNumber={this.props.followNumber} followerNumber={this.props.followerNumber} weiboNumber={this.props.weiboNumber}/>
				<NewSongList newSongList={this.props.newSongList}/>
				<HotTopic hotTopics={this.props.hotTopics}/>	
				<FriendFollowStatus ffriendStatus={this.props.ffriendStatus} personCard={this.props.personCard}/>
				<Announcement announcements={this.props.announcements}/>
			</div>
		);
	}
}