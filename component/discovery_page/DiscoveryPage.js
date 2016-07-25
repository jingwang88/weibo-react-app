import React, {Component} from 'react';
import LeftCategory from './left_category/LeftCategory';

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
            </div>
        );
    }
}