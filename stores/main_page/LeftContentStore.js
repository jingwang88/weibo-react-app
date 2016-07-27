import AppDispatcher from '../../dispatcher/AppDispatcher';
import Event from 'events';
import WeiboReactConstants from '../../constants/WeiboReactConstants';
import Assign from 'object-assign';

var CHANGE_EVENT = "change";
var EventEmitter = Event.EventEmitter;
var options = ["娱乐", "媒体", "美女", "正能量", "购物", "旅游", "欧美", "字幕组", "明星", "体育", "科技", "生活", "旅游"];

var LeftContentStore = Assign({}, EventEmitter.prototype, {
	getOptions: function () {
		return options;
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

AppDispatcher.register(function (action) {

});

export default LeftContentStore;