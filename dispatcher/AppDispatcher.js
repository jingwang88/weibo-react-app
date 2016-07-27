import flux from 'flux';

var Dispatcher = flux.Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function (action) {
	this.dispatch({
		action: action,
		source: 'VIEW_ACTION'
	});
}

export default AppDispatcher;