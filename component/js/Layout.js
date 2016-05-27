import React, {Component} from 'react';
import Header from './Header';
import Content from './right_content/Content';
import FnBanner from './FnBanner';
import Information from './right_content/Information';
import Title from './right_content/Title';

export default class Layout extends React.Component {
	constructor () {
		super();
		this.state = {
			img: 'http://tva1.sinaimg.cn/crop.0.0.180.180.50/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
			repostNumber: 1,
			commentNumber: 1,
			likerNumber: 0,
			personalPage: 'http://weibo.com/mayun?from=profile&wvr=6',
			nickName: 'Mr. Ma',
			time: '5月6日',
			source: '魅族MX4',
			content: '这是weibo-react-app 的测试'
		};
	}
	render () {
		return (
			<div>
				<div className="up-content">
					<Header img={this.state.img}/>
					<div className="right-content">
						<Title personalPage={this.state.personalPage} nickName={this.state.nickName}/>
						<Information time={this.state.time} source={this.state.source}/>
						<Content content={this.state.content}/> 
					</div>
				</div>
				
				<FnBanner repostNumber={this.state.repostNumber} commentNumber={this.state.commentNumber} likerNumber={this.state.likerNumber}/>
			</div>
		);
	}
}
