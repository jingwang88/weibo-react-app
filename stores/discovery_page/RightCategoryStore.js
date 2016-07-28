import AppDispatcher from '../../dispatcher/AppDispatcher';
import WeiboReactConstants from '../../constants/WeiboReactConstants';
import Event from 'events';
import Assign from 'object-assign';

var CHANGE_EVENT = "change";
var EventEmitter = Event.EventEmitter;
var category = [
    {href: "#", text: "视频"}, {href: "#", text: "青岛"}, {href: "#", text: "社会"}, {href: "#", text: "国际"}, {href: "#", text: "科技"}, {href: "#", text: "科普"}, {href: "#", text: "数码"}, {href: "#", text: "财经"}, 
    {href: "#", text: "股市"}, {href: "#", text: "明星"}, {href: "#", text: "综艺"}, {href: "#", text: "电视剧"}, {href: "#", text: "电影"}, {href: "#", text: "音乐"}, {href: "#", text: "汽车"}, {href: "#", text: "体育"},
    {href: "#", text: "运动健身"}, {href: "#", text: "健康"}, {href: "#", text: "瘦身"}, {href: "#", text: "养生"}, {href: "#", text: "军事"}, {href: "#", text: "历史"}, {href: "#", text: "美女模特"}, {href: "#", text: "美图"},
    {href: "#", text: "情感"}, {href: "#", text: "搞笑"}, {href: "#", text: "辟谣"}, {href: "#", text: "正能量"}, {href: "#", text: "政务"}, {href: "#", text: "游戏"}, {href: "#", text: "旅游"}, {href: "#", text: "育儿"}, {href: "#", text: "教育"}, 
    {href: "#", text: "美食"}, {href: "#", text: "房产"}, {href: "#", text: "家居"}, {href: "#", text: "星座"}, {href: "#", text: "读书"}, {href: "#", text: "三农"}, {href: "#", text: "设计"}, {href: "#", text: "艺术"}, {href: "#", text: "时尚"}, 
    {href: "#", text: "美妆"}, {href: "#", text: "动漫"}, {href: "#", text: "宗教"}, {href: "#", text: "萌宠"}
];
var RightCategoryStore = Assign({}, EventEmitter.prototype, {
    getCategory: function () {
        return category;
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(function (playload) {
    var action = playload.action;
    switch(action.actionType) {
    
    }
});

export default RightCategoryStore;