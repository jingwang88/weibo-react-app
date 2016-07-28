import React, {Component} from 'react';
import DiscoveryPage from './discovery_page/DiscoveryPage';

import RightCategoryStore from '../stores/discovery_page/RightCategoryStore';
import MiddleCategoryStore from '../stores/discovery_page/MiddleCategoryStore';


function getWeiboReactState () {
    return ({
        category: RightCategoryStore.getCategory(),
        weibos: MiddleCategoryStore.getWeibos()
    });
}

export default class DisPage extends Component {
    constructor (props) {
        super(props);
        this.state = getWeiboReactState();
    }

    componentDidMount() {
        RightCategoryStore.addChangeListener(this._onChange.bind(this));
        MiddleCategoryStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        RightCategoryStore.removeChangeListener(this._onChange.bind(this));
        MiddleCategoryStore.removeChangeListener(this._onChange.bind(this));
    }
    
    render () {
        return (
            <DiscoveryPage
                category = {this.state.category}
                weibos = {this.state.weibos}
            />
        );
    }
    _onChange () {
        this.setState(getWeiboReactState());
    }

}

