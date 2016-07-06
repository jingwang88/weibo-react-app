import React, {Component} from 'react';
import Navigator from './js/navigator/Navigator';
import WeiboContentLayout from './js/weibo_content/WeiboContentLayout';
import LeftContent from './js/Left_content/LeftContent';
import WeiboInput from './js/create_weibo/WeiboInput.js';
import RightContent from './js/right_content/RightContent.js';

export default class Layout extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: "青春如歌",
			options: ["娱乐", "媒体", "美女", "正能量", "购物", "旅游", "欧美", "字幕组", "明星"],
			hotWeibo: "一代拳王一代拳王穆罕默德·阿里因病去世，众网友微博悼念"
		};
	}
	render () {
		return (
			<div className="container clearfix">
				<Navigator name={this.state.name} />
				<LeftContent options={this.state.options}/>
				<div className="middle-content">
					<WeiboInput hotWeibo={this.state.hotWeibo}/>
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
					<WeiboContentLayout />
				</div>
				<RightContent />
			</div>
		);
	}
}

