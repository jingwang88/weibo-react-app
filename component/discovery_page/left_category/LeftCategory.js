import React, {Component} from 'react';
require('./left_category.less');

export default class LeftCategory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            onCategoryNumber: 0
        };
        this.categoryItems = ['热门话题', '微话题', '找人', '电影', '听歌', '股票', '播客', '视频', '旅游', '购物', '直播', '新闻'];
    }

    handleCategoryItemClick (e) {
        var target = e.target || e.srcElement;

        if (target.tagName === 'LI') {
            this.setState({
                onCategoryNumber: target.dataset.index
            });
            var onCategoryEle = document.getElementsByClassName('category-item')[target.dataset.index];
            onCategoryEle.className += " onCategoryEle";
           
        }
    }

    componentDidMount () {
        var onCategoryEle = document.getElementsByClassName('category-item')[this.state.onCategoryNumber];
        var leftCategory = document.getElementsByClassName('left-category')[0];
        onCategoryEle.className += " onCategoryEle";
        leftCategory.addEventListener('click', this.handleCategoryItemClick.bind(this));
    }

    componentWillUpdate () {
        var onCategoryEle = document.getElementsByClassName('category-item')[this.state.onCategoryNumber];
        onCategoryEle.className = "category-item";
    }

    render () {
        return (
            <ul className="left-category">
                {
                    this.categoryItems.map((item, index) => {
                        return <li key={index} data-index={index} className="category-item"><a>{item}</a></li>
                    })
                }
            </ul>
        );
    }
}