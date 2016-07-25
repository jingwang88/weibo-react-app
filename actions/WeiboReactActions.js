import AppDispatcher from '../dispatcher/AppDispatcher';
import WeiboReactConstants from '../constants/WeiboReactConstants';

var WeiboReactActions = {
	refreshHotTopics: function () {
		AppDispatcher.handleAction({
			actionType: WeiboReactConstants.REFRESH_HOTTOPICS
		});
	}
}

export default WeiboReactActions;