import React, {Component} from 'react';
require('./middle_content.less');

export default class MiddleCOntent extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className="middle-content">
                <ul className="tab-list">
                    <li>推荐</li>
                    <li>热门微博榜</li>
                    <li>分类</li>
                </ul>
                <div>
                
                </div>
            </div>
           

        );
    }
}