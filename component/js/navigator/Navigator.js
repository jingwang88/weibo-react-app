import React, {Component} from 'react';

export default class Navigator extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			isShowPlaceHolder: true,
			isShowAll: true
		}
	}
	handleChange (event) {
		if (event.target.value !== "") {
			this.setState({
				isShowPlaceHolder: false,
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
		})
		event.target.value = null;
	}
	render () {
		let isShowPlaceHolder = this.state.isShowPlaceHolder, 
			isShowAll = this.state.isShowAll;
		return (
			<div  className="navigator">
				<div className="navi-container">
					<a  className="weiboLogo" href="http://weibo.com/qiongwanger/home?topnav=1&wvr=6&mod=logo"><span></span></a>
					<div className="search">
						<input className="search-content" onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} onBlur={this.handleBlur.bind(this)}/>
						<em className="search-icon">f</em>
						<span className="place-holder" ref="placeHolder">{isShowPlaceHolder ? ((isShowAll ? "大家都在搜：" : "")+this.props.hotWords) : ""}</span>
					</div>
					<ul className="operation navigator-list">
						<li className="write-weibo" title="请试一下键盘N键"><a>ß</a></li>
						<li className="set-up"><a>*</a></li>
						<li className="related-info"><a>I</a></li>
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