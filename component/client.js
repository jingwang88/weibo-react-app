import React, { Component } from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
require('../css/font_face.less');
require('../css/main.less');

render(<Layout />, document.getElementById('app'));