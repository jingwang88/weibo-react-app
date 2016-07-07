import AppDispatcher from '../dispatcher/AppDispatcher';
import Event from 'events';
import WeiboReactConstants from '../constants/WeiboReactConstants';
import Assign from 'object-assign';

var CHANGE_EVENT = "change";
var EventEmitter = Event.EventEmitter;
var name = "青春如歌";

var NavigatorStore = Assign({}, EventEmitter.prototype, {
	getName: function () {
		return name;
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	}, 
	addChangeListener: function (callback) {
		this.on("change", callback)
	},
	removeChangeListener： function (callback) {
		this.removeListener("change", callback);
	}
});

AppDispatcher.register(function (action) {

});

export default NavigatorStore;