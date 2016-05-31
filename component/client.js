import React, {Component} from 'react';
import { render } from 'react-dom';
import Layout from './js/weibo_content/WeiboContentLayout';
require('./css/main.less');

render(<WeiboContentLayout />, document.getElementById('app'));