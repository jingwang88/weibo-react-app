import React, {Component} from 'react';
require('./right_category.less');

export default class RightCategory extends Component {
    constructor (props)  {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className="hot-weibo-category">
                <div className="hot-weibo-category-title">热门微博分类</div>
                <ul className="hot-weibo-category-list clearfix">
                   { 
                        this.props.category.map(function (categoryItem, index) {
                            return (
                                <li key={index} className="right-category-item">
                                    <a href={categoryItem.href}>
                                        <em className={"icon-"+index}></em>
                                        <span>{categoryItem.text}</span>
                                    </a>
                                </li>
                            );
                        }) 
                    }
                </ul>
            </div>           
        );
    }
}