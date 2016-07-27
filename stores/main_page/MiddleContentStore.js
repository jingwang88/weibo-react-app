import AppDispatcher from '../../dispatcher/AppDispatcher';
import Event from 'events';
import WeiboReactConstants from '../../constants/WeiboReactConstants';
import Assign from 'object-assign';

var CHANGE_EVENT = "change";
var EventEmitter = Event.EventEmitter;

var hotWeibo = "一代拳王一代拳王穆罕默德·阿里因病去世，众网友微博悼念";
var weibos = [
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	}
];

var MiddleContentStore = Assign({}, EventEmitter.prototype, {
	getHotWeibo: function () {
		return hotWeibo;
	},
	getWeibos: function () {
		return weibos;
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	}, 
	addChangeListener: function (callback) {
		this.on("change", callback)
	},
	removeChangeListener: function (callback) {
		this.removeListener("change", callback);
	}
});

AppDispatcher.register(function (action){
	
});

export default MiddleContentStore;