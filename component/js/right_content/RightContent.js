import React, {Component} from 'react';
import PersonCard from './PersonCard.js';
import NewSongList from './NewSongList.js';
import HotTopic from './HotTopic.js';
import FriendFollowStatus from './FriendFollowStatus.js';
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
					bookName: "和爸爸一起读书",
					author: "[美]理查德•乔根森(著)",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9309975/100x150x75x0.jpg",
					rankScore: "172231"
				},
				{
					bookName: "伊伊，端午节快乐！",
					author: "丁丁，梁琨（绘)",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9322989/100x150x75x0.jpg",
					rankScore: "1681472"
				},
				{
					bookName: "小驴托托·第一辑：我的第一个好朋友系列",
					author: "[法]贝内迪克特·古提艾(著),谢逢蓓(译)",
					img: "http://sinastorage.com/vipbook.sinaedge.com/cimg/bookpage/9310232/100x150x75x0.jpg",
					rankScore: "1072681"
				}
			],
			hotTopics: [
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
				{
					title: '几时放假可视对讲',
					hotDegree: 10000
				},
			],
			ffriendStatus: {
				latestFollower: '@sdjfak',
				latestFollowerNum: 25000,
				youFollow: '@youFollow'
			},
			announcements: ['全国辟谣平台', '首都互联网协会发布坚守七条底线倡议书']
		}
	}
	render () {
		return (
			<div>
{/*				<PersonCard followNumber={this.state.followNumber} followerNumber={this.state.followerNumber} weiboNumber={this.state.weiboNumber}/>
*/}				<NewSongList newSongList={this.state.newSongList}/>
				<HotTopic hotTopics={this.state.hotTopics}/>
				{/*<FriendFollowStatus ffriendStatus={this.state.ffriendStatus}/>
				<Announcement announcements={this.state.announcements}/>*/}
		</div>
		);
	}
}