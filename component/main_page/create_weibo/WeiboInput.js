import React, {Component} from 'react';
require('./create_weibo.less');

export default class WeiboInput extends Component {
	constructor () {
		super();
		this.state = {
			wordsNumberLeft: 140
		}
	}
	componentDidMount () {
		
	}
	handleFocus () {
		const hotWeibo = document.getElementsByClassName("hot-weibo")[0];
		const inputNotice = document.getElementsByClassName("input-notice")[0];
		hotWeibo.style.display = "none";
		inputNotice.style.display = "block";
	}
	handleBlur () {
		const hotWeibo = document.getElementsByClassName("hot-weibo")[0];
		const inputNotice = document.getElementsByClassName("input-notice")[0];
		const inputContent = document.getElementsByClassName("input-content")[0];
		if (inputContent.value.length === 0) {
			hotWeibo.style.display = "block";
			inputNotice.style.display = "none";			
		}
	}
	handleChange () {
		const inputContent = document.getElementsByClassName("input-content")[0];
		var wordsNumberLeft = 140 - inputContent.value.length;
		this.setState({
			wordsNumberLeft: wordsNumberLeft
		});
	}
	render () {
		return (
			<div className="weibo-post">
				<div className="weibo-input">
					<div className="input-info">
						<p className="input-title">有什么新鲜事告诉大家？</p>
						<p className="hot-weibo">{this.props.hotWeibo}<span>&nbsp;&nbsp;热门微博</span></p>
						<p className="input-notice">还可以输入<span className="wordsNumberLeft">{this.state.wordsNumberLeft}</span>字</p>
					</div>
					<textarea className="input-content" onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
					<div className="weibo-component">
						<ul className="component">
							<li className="faces"><em>o</em>表情</li>
							<li className="pictures"><em>p</em>图片</li>
							<li className="videao"><em>q</em>视频</li>
							<li className="topic"><em>"</em>话题</li>
							<li className="bulletin-article"><em></em>头条文章</li>
							<li className="another"><em>…</em></li>
						</ul>
						<span className="post">发布</span>
						<span className="models" title="发布微博按钮">公开<em>c</em></span>
					</div>
				</div>
				<div className="weibo-group">
					<ul className="group">
						<li>全部</li>
						<li>原创</li>
						<li>图片</li>
						<li>视频</li>
						<li>音乐</li>
						<li>文章</li>
					</ul>
					<div className="search-weibo">
						<input type="text" placeholder="搜索我关注人的微博"/>
						<em className="search-icon">f</em>
						<em className="more-selection">g</em>
					</div>
				</div>
			</div>
		);
	}
}