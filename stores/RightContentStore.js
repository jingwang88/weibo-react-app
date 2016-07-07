import AppDispatcher from '../dispatcher/AppDispatcher';
import Event from 'events';
import WeiboReactConstants from '../constants/WeiboReactConstants';
import Assign from 'object-assign';

var CHANGE_EVENT = "change",
EventEmitter = Event.EventEmitter;

// followNumber followerNumber weiboNumber
var statusNumber = [143, 100, 122],
	newSongList = [
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
	hotTopics = [
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
		{
			name: '几时放假可视对讲',
			hotDegree: 10000
		},
	],
	ffriendStatus = {
		latestFollower: '@sdjfak',
		latestFollowerNum: 25000,
		youFollow: '@youFollow'
	},
	personCard = [
		{
			headerPic: "http://tva3.sinaimg.cn/crop.12.4.574.574.50/b017f5b4gw1ecfwitm7inj20hs0howhc.jpg",
			id: "Fitpics",
			description: "分享大量无水印健身励志美图。这里只有美好的身体。欢迎健身者拍图私信投稿。图片整理搬运自网络和粉丝..."
		},
		{
			headerPic: "http://tva4.sinaimg.cn/crop.0.0.717.717.50/949ab826jw8evw4frb9elj20jx0jxmz7.jpg",
			id: "果邮水果小店招-代理",
			description: "车厘子优惠代理卖疯了，百种进口水果，想吃、加盟加V：guoyou365"
		},
		{
			headerPic: "http://tva1.sinaimg.cn/crop.0.1.750.750.50/d419c9e3jw8f3qe6zc48gj20ku0kwq3k.jpg",
			id: "炉石葫芦呼噜",
			description: "Team WE电子竞技俱乐部炉石传说分部队员"
		},
		{
			headerPic: "http://tva2.sinaimg.cn/crop.56.0.134.134.50/c039055agw1es0h3c5asxj206o03r74a.jpg",
			id: "NLPJob",
			description: "www.nlpjob.com ; 微信公众号nlpjob; 关注自然语言处理, 机器学习等相关领域的工作机会。"
		}
	],
	announcements = ['全国辟谣平台', '首都互联网协会发布坚守七条底线倡议书'];


var RightContentStore = Assign({}, EventEmitter.prototype, {
	getStatusNumber: function () {
		return statusNumber;
	},
	getNewSongList: function () {
		return newSongList;
	},
	getHotTopics: function () {
		return hotTopics;
	},
	getFFriendStatus: function () {
		return ffriendStatus;
	},
	getPersonCard: function () {
		return personCard;
	},
	getAnnouncements: function () {
		return announcements;
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function (callback) {
		this.on("change", callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener("change");
	}
});

AppDispatcher.register(function (action) {

});

export default RightContentStore;