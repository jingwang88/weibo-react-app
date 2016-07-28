import React, {Component} from 'react';
import LeftCategory from './left_category/LeftCategory';
import RightCategory from './right_category/RightCategory';
import MiddleContent from './middle_content/MiddleContent';
require('./discovery_page.less');

export default class DiscoveryPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className="discovery-page clearfix">
                <div className="discovery-logo-head"></div>
               <LeftCategory />
                <MiddleContent weibos={this.props.weibos}/>
                <RightCategory 
                    category={this.props.category}
                />
            </div>
        );
    }
}