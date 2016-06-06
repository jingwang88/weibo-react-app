import React, {Component} from 'react';
import Navigator from './js/navigator/Navigator';
import WeiboContentLayout from './js/weibo_content/WeiboContentLayout';
import LeftContent from './js/Left_content/LeftContent';
import WeiboInput from './js/create_weibo/WeiboInput.js';

export default class Layout extends React.Component {
	constructor () {
		super();
		this.state = {
			name: "青春如歌",
			options: ["娱乐", "媒体", "美女", "正能量", "购物", "旅游", "欧美", "字幕组", "明星"],
			hotWeibo: "一代拳王一代拳王穆罕默德·阿里因病去世，众网友微博悼念"
		};
	}
	render () {
		return (
			<div className="container">
				<Navigator name={this.state.name} />
				{/*<LeftContent options={this.state.options}/>*/}
				{/*<WeiboContentLayout />*/}
				{/*<WeiboInput hotWeibo={this.state.hotWeibo}/>*/}
			</div>
		);
	}
}