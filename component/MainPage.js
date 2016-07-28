import React, {Component} from 'react';
import WeiboContentLayout from './main_page/weibo_content/WeiboContentLayout';
import LeftContent from './main_page/left_content/LeftContent';
import WeiboInput from './main_page/create_weibo/WeiboInput';
import RightContent from './main_page/right_content/RightContent';

import LeftContentStore from '../stores/main_page/LeftContentStore';
import MiddleContentStore from '../stores/main_page/MiddleContentStore';
import RightContentStore from '../stores/main_page/RightContentStore';

function getWeiboReactState () {
    return ({
        options: LeftContentStore.getOptions(),
        hotWeibo: MiddleContentStore.getHotWeibo(),
        weibos: MiddleContentStore.getWeibos(),
        followNumber: RightContentStore.getStatusNumber()[0],
        followerNumber: RightContentStore.getStatusNumber()[1],
        weiboNumber: RightContentStore.getStatusNumber()[2],
        newSongList: RightContentStore.getNewSongList(),
        hotTopics: RightContentStore.getHotTopics(),
        ffriendStatus: RightContentStore.getFFriendStatus(),
        personCard: RightContentStore.getPersonCard(),
        announcements: RightContentStore.getAnnouncements()
    });
}

export default class MainPage extends Component {
    constructor (props) {
        super(props);
        this.state = getWeiboReactState();
    }

    componentDidMount() {
        LeftContentStore.addChangeListener(this._onChange.bind(this));
        MiddleContentStore.addChangeListener(this._onChange.bind(this));
        RightContentStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        LeftContentStore.removeChangeListener(this._onChange.bind(this));
        MiddleContentStore.removeChangeListener(this._onChange.bind(this));
        RightContentStore.removeChangeListener(this._onChange.bind(this));
    }
    
    render () {
        return (
                <div className="main-page"> 
                    <LeftContent 
                        options={this.state.options}
                    />
                    <div className="middle-content">
                        <WeiboInput hotWeibo={this.state.hotWeibo}/>
                        {
                            this.state.weibos.map((weibo, index) => {
                                return (
                                    <WeiboContentLayout weiboContent={weibo} key={index}></WeiboContentLayout>
                                );
                            })
                        }
                    </div>
                    <RightContent 
                        followNumber={this.state.followNumber} 
                        followerNumber={this.state.followerNumber}
                        weiboNumber={this.state.weiboNumber}
                        newSongList={this.state.newSongList}
                        hotTopics={this.state.hotTopics}
                        ffriendStatus={this.state.ffriendStatus}
                        personCard={this.state.personCard}
                        announcements = {this.state.announcements}
                    />
                </div>
        );
    }
    _onChange () {
        this.setState(getWeiboReactState());
    }

}

