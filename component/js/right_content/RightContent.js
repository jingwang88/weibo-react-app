import React, {Component} from 'react';
import PersonCard from './PersonCard.js';
import NewSongList from './NewSongList.js';
import HotTopic from './HotTopic.js';
import FriendFollowStatus from './FriendFollowStatus.js';
import CelebrityRanking from './CelebrityRanking.js';
import Announcement from './Announcement.js';

export default class RightContent extends Component {
	render () {
		return (
			<div>
				<PersonCard />
				<NewSongList />
				<HotTopic />
				<FriendFollowStatus />
				<CelebrityRanking />
				<Announcement />
			</div>
		);
	}
}