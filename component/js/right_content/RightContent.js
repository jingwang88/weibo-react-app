import React, {Component} from 'react';
import PersonCard from './PersonCard.js';
import NewSongList from './NewSongList.js';
import HotTopic from './HotTopic.js';
import FriendFollowStatus from './FriendFollowStatus.js';
import CelebrityRanking from './CelebrityRanking.js';
import Announcement from './Announcement.js';

export default class RightContent extends Component {
	constructor () {
		super();
		this.state = {
			followNumber: 143,
			followerNumber: 100,
			weiboNumber: 122,
			newSongList: [
				{
					bookName: "晚安.当一切入睡",
					author: "毕淑敏",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9326411/100x150x75x0.jpg",
					rankScore: "172231分"
				},
				{
					bookName: "原来你还在这里（全两册）",
					author: "辛夷坞",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9322886/100x150x75x0.jpg",
					rankScore: "157210分"
				},
				{
					bookName: "穿越人海拥抱你",
					author: "苑子文,苑子豪",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9310232/100x150x75x0.jpg",
					rankScore: "151442分"
				}
			]
		}
	}
	render () {
		return (
			<div>
				{/*<PersonCard followNumber={this.state.followNumber} followerNumber={this.state.followerNumber} weiboNumber={this.state.weiboNumber}/>*/}
				<NewSongList newSongList={this.state.newSongList}/>
				{/*<HotTopic />
				<FriendFollowStatus />
				<CelebrityRanking />
				<Announcement />*/}
		</div>
		);
	}
}