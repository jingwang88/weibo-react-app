import React, {Component} from 'react';
import LeftCategory from './left_category/LeftCategory';
import RightCategory from './right_category/RightCategory';

export default class DiscoveryPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
       
    }

    render () {
        return (
            <div>
                <LeftCategory />
                <RightCategory 
                    category={this.props.category}
                />
            </div>
        );
    }
}