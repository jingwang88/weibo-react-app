import React, {Component} from 'react';
import Header from './Header';
import Content from './right_content/Content';
import FnBanner from './FnBanner';
import Information from './right_content/Information';
import Title from './right_content/Title';

export default class WeiboContentLayout extends React.Component {
	constructor () {
		super();
		this.state = {
			img: 'http://tva1.sinaimg.cn/crop.0.0.180.180.50/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
			repostNumber: 1,
			commentNumber: 1,
			likerNumber: 0,
			personalPage: 'http://weibo.com/mayun?from=profile&wvr=6',
			nickName: '青春如歌',
			time: '5月6日',
			source: '魅族MX4',
			content: '这是weibo-react-app 的测试,我现在在哪里？我继续握住听筒台起脸来，看看电话亭的四周。如今我在什么地方？我不知道那是什么地方。我猜不看。到底这里是那里？映入我眼帘的只是不知何处去的人们，行色匆匆地从我身边走过去。而我只能站在那个不知名的地方，不停地呼唤绿子的名字。',
			isDisplay: [false, true,false]
		};
	}
	render () {
		return (
			<div>
				<div className="up-content">
					<Header img={this.state.img}/>
					<div className="right-content">
						<Title personalPage={this.state.personalPage} nickName={this.state.nickName} isDisplay={this.state.isDisplay}/>
						<Information time={this.state.time} source={this.state.source}/>
						<Content content={this.state.content}/> 
					</div>
				</div>
				<FnBanner repostNumber={this.state.repostNumber} commentNumber={this.state.commentNumber} likerNumber={this.state.likerNumber}/>
			</div>
		);
	}
}
