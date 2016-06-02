import React, {Component} from 'react';
import Navigator from './js/navigator/Navigator';
import WeiboContentLayout from './js/weibo_content/WeiboContentLayout';
import LeftContent from './js/Left_content/LeftContent';

export default class Layout extends React.Component {
	constructor () {
		super();
		this.state = {
			name: "青春如歌",
			options: ["娱乐", "媒体", "美女", "正能量", "购物", "旅游", "欧美", "字幕组", "明星"]
		};
	}
	render () {
		return (
			<div className="container">
				<Navigator name={this.state.name} />
				<LeftContent options={this.state.options}/>
				{/*<WeiboContentLayout />*/}
			</div>
		);
	}
}