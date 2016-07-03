import React, {Component} from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
require('./css/left_content.less')
require('./css/weibo_content.less');
require('./css/navigator.less');
require('./css/main.less');
require('./css/create_weibo.less');
require('./css/right_content_person_card.less');
require('./css/right_content_NewSongList.less');

render(<Layout />, document.getElementById('app'));

