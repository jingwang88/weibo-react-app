import React, {Component} from 'react';
import Navigator from './main_page/navigator/Navigator';

import NavigatorStore from '../stores/main_page/NavigatorStore';

function getWeiboReactState () {
	return ({
		name: NavigatorStore.getName(),
		hotWords: NavigatorStore.getHotWords(),
		hotSearchWords: NavigatorStore.getHotSearchWords(),
	});
}

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = getWeiboReactState();
	}

	componentDidMount() {
		NavigatorStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		NavigatorStore.removeChangeListener(this._onChange.bind(this));
	}
	
	render () {
		return (
			<div className="container clearfix">
				<Navigator 
					name={this.state.name}
					hotWords = {this.state.hotWords}
					hotSearchWords = {this.state.hotSearchWords}
				/>
				{this.props.children}
			</div>
		);
	}
	_onChange () {
		this.setState(getWeiboReactState());
	}

}

