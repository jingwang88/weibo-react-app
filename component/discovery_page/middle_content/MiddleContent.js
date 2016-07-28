import React, {Component} from 'react';
import WeiboContentLayout from '../../main_page/weibo_content/WeiboContentLayout.js';
require('./middle_content.less');

export default class MiddleCOntent extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            onTab: 0
        };
    }
    handleSwitchClick (event) {
        console.log("click");
        var target = event.target || event.srcElement;
        if (target.tagName === "LI" && this.state.onTab != target.dataset.tab) {
            this.setState({
                onTab: parseInt(target.dataset.tab)
            });
        } 
    }

    componentDidMount () {
        this.tabs = document.getElementsByClassName('category-tab');
        var tabList = document.getElementsByClassName('tab-list')[0];
        console.log(this.state.onTab);
        this.tabs[this.state.onTab].className += " category-onTab";
        tabList.addEventListener('click', this.handleSwitchClick.bind(this));
    }
    componentDidUpdate () {
        console.log("update");
        for (let i=0; i<this.tabs.length; i++) {
            this.tabs[i].className = "category-tab";
        }
        this.tabs[this.state.onTab].className += " category-onTab";
    }
    render () {
        return (
            <div className="discovery-middle-content">
                <ul className="tab-list clearfix">
                    <li className="category-tab" data-tab="0">推荐</li>
                    <li className="category-tab" data-tab="1">热门微博榜</li>
                    <li className="category-tab" data-tab="2">分类</li>
                </ul>
                <div className="tab-content">
                    {
                       ((onTab) => {
                            switch(onTab) {
                                case 0:
                                    return (
                                         <div className="weibo-recommend">
                                            {
                                               this.props.weibos.map((weibo, index) => {
                                                    return <WeiboContentLayout weiboContent={weibo} key={index}/>;
                                               })
                                            }
                                        </div>
                                    );
                                    break;
                                case 1:
                                    return (
                                         <div className="hot-weibo-rank-list">
                                            {
                                               this.props.weibos.map((weibo, index) => {
                                                    return <WeiboContentLayout weiboContent={weibo} key={index}/>;
                                               })
                                            }
                                        </div>
                                    );
                                case 3:
                                    return (
                                         <div className="middle-category-list">
                                            {
                                               this.props.weibos.map((weibo, index) => {
                                                    return <WeiboContentLayout weiboContent={weibo} key={index}/>;
                                               })
                                            }
                                        </div>
                                    );
                            }
                        })(this.state.onTab)
                    }
                </div>
            </div>  
        );
    }
}