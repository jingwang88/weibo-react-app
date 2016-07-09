import React, {Component} from 'react';

export default class Navigator extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			isShowPlaceHolder: true,
			isShowAll: true
		};
	}
	handleChange (event) {
		if (event.target.value !== "") {
			this.setState({
				isShowPlaceHolder: false,
				isShowAll: false
			});
		}
	}
	handleFocus(event) {
		this.setState({
			isShowPlaceHolder: true,
			isShowAll: false
		});
	}
	handleBlur (event) {
		this.setState({
			isShowPlaceHolder: true,
			isShowAll: true
		});
		event.target.value = null;
	}
	handleMessageMouseOver () {
		this.refs.messageInfo.style.display = "block";
	}
	handleInformMouseOver () {
		this.refs.messageInfo.style.display = "block";
	}
	handleMessageMouseOut() {
		this.refs.messageInfo.style.display = "none";
	}
	handleInformMouseOut () {
		this.refs.messageInfo.style.display = "none";
	}
	handleSetUpMouseOver () {
		this.refs.setting.style.display = "block";
	}
	handleSettingMouseOver () {
		this.refs.setting.style.display = "block";
	}
	handleSetUpMouseOut() {
		this.refs.setting.style.display = "none";
	}
	handleSettingMouseOut () {
		this.refs.setting.style.display = "none";
	}
	render () {
		let isShowPlaceHolder = this.state.isShowPlaceHolder, 
			isShowAll = this.state.isShowAll,
			isDisplayMessageInform= this.state.isDisplayMessageInform,
			index = 1;
		return (
			<div  className="navigator">
				<div className="navi-container">
					<a  className="weiboLogo" href="http://weibo.com/qiongwanger/home?topnav=1&wvr=6&mod=logo"><span></span></a>
					<div className="search">
						<input className="search-content" onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} onBlur={this.handleBlur.bind(this)}/>
						<em className="search-icon">f</em>
						<span className="place-holder" ref="placeHolder" onFocus={this.handleFocus.bind(this)}>{isShowPlaceHolder ? ((isShowAll ? "大家都在搜：" : "")+this.props.hotWords) : ""}</span>
						{
							!isShowAll ? 
							<ul className="hot-search-list">
								<li className="hot-search-word" ref="forwardFullList">查看完整热搜版</li>
								{
									this.props.hotSearchWords.map((hotSearchWord) => {
										return <li className="hot-search-word" key={index}><em ref={"index"+index}>{index++}</em>{hotSearchWord}</li>
									})
								}
							</ul> 
							: ""
						}
					</div>
					<ul className="operation navigator-list">
						<li className="write-weibo" title="请试一下键盘N键"><a>ß</a></li>
						<li className="set-up" onMouseOver={this.handleSetUpMouseOver.bind(this)} onMouseOut={this.handleSetUpMouseOut.bind(this)}>
							<a>*</a>
							<div className="setting" ref="setting" onMouseOver={this.handleSettingMouseOver.bind(this)} onMouseOut={this.handleSettingMouseOut.bind(this)}>
								<div className="triangle"></div>
								<ul className="setting-list set">
									<li>账号设置</li>
									<li>会员中心</li>
									<li>v认证</li>
									<li>账号安全</li>
									<li>隐私设置</li>
									<li>消息设置</li>
									<li>帮助中心</li>
								</ul>
								<div className="setting-logout set">退出</div>
							</div>	
						</li>
						<li className="related-info" onMouseOver={this.handleMessageMouseOver.bind(this)} onMouseOut={this.handleMessageMouseOut.bind(this)}>
							<a>I</a>
							<div className="message-inform" ref="messageInfo" onMouseOver={this.handleInformMouseOver.bind(this)} onMouseOut={this.handleInformMouseOut.bind(this)}>
								<div className="triangle"></div>
								<ul className="message-inform-retatedme inform">
									<li>@我</li>
									<li>评论</li>
									<li>赞</li>
								</ul>
								<ul className="message-inform-message inform">
									<li>私信</li>
									<li>未关注人私信</li>
									<li>群通知</li>
								</ul>
								<div className="message-inform-setting inform">消息设置</div>
							</div>	
						</li>
					</ul>
					<ul className="forward navigator-list">
						<li className="user-page"><a><em>H</em>{this.props.name}</a></li>
						<li className="game"><a><em>G</em>游戏</a></li>
						<li className="find-something"><a><em>F</em>发现</a></li>
						<li className="first-page"><a><em>E</em>首页</a></li>
					</ul>
				</div>
			</div>
		);
	}
}