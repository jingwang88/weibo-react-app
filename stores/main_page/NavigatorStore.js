import AppDispatcher from '../../dispatcher/AppDispatcher';
import Event from 'events';
import WeiboReactConstants from '../../constants/WeiboReactConstants';
import Assign from 'object-assign';

var CHANGE_EVENT = "change";
var EventEmitter = Event.EventEmitter;
var name = "青春如歌";
var hotWords = "德国法国";
var hotSearchWords = ["青青子衿,悠悠我心.", "彼采萧兮,一日不见,如三秋兮.", "投我以木瓜,报之以琼琚.", "皎皎白驹,在彼空谷,生刍一束,其人如玉. ", "死生契阔,与子成说.执子之手,与子偕老.",
						"秩秩斯干,幽幽南山"
					];

var NavigatorStore = Assign({}, EventEmitter.prototype, {
	getName: function () {
		return name;
	},
	getHotWords: function () {
		return hotWords;
	},
	getHotSearchWords: function () {
		return hotSearchWords;
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

export default NavigatorStore;