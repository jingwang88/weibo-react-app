import React, {Component} from 'react';

export default class Announcement extends Component {
	render () {
		return (
			<div className="announcement">
				<div className="announcement-title">公告栏</div>
				<ul>
					{this.props.announcements.map((announcement) => {
						return (
							<li><a>&lsaquo;&lsaquo;{announcement}&lsaquo;&lsaquo;</a></li>
						);						
					})}
				</ul>
			</div>
		);
	}
}