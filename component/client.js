import React, {Component} from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
require('./css/left_content.less')
require('./css/weibo_content.less');
require('./css/navigator.less');
require('./css/main.less');
require('./css/create_weibo.less');

render(<Layout />, document.getElementById('app'));

