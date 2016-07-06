import React, {Component} from 'react';

export default class Announcement extends Component {
	render () {
		return (
			<div className="announcement  right_content_block">
				<div className="announcement-title">公告栏</div>
				<ul className="announcement-item">
					{this.props.announcements.map((announcement) => {
						return (
							<li className="item"><a>《{announcement}》</a></li>
						);						
					})}
				</ul>
			</div>
		);
	}
}