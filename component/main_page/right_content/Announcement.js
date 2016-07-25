import React, {Component} from 'react';
require('./right_content_announcement.less');

export default class Announcement extends Component {
	render () {
		let i = 0;
		return (
			<div className="announcement  right_content_block">
				<div className="announcement-title">公告栏</div>
				<ul className="announcement-item">
					{this.props.announcements.map((announcement) => {
						return (
							<li className="item" key={++i}><a>《{announcement}》</a></li>
						);						
					})}
				</ul>
			</div>
		);
	}
}