import React, {Component} from 'react';
import Header from './Header';
import Content from './right_content/Content';
import FnBanner from './FnBanner';
import Information from './right_content/Information';
import Title from './right_content/Title';
require('./weibo_content.less');

export default class WeiboContentLayout extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="weibo-content">
				<div className="up-content">
					<Header img={this.props.weiboContent.img}/>
					<div className="right-part">
						<Title personalPage={this.props.weiboContent.personalPage} nickName={this.props.weiboContent.nickName} isDisplay={this.props.weiboContent.isDisplay}/>
						<Information time={this.props.weiboContent.time} source={this.props.weiboContent.source}/>
						<Content content={this.props.weiboContent.content}/> 
					</div>
				</div>
				<FnBanner repostNumber={this.props.weiboContent.repostNumber} commentNumber={this.props.weiboContent.commentNumber} likerNumber={this.props.weiboContent.likerNumber}/>
			</div>
		);
	}
}
