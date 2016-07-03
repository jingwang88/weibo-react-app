import React, {Component} from 'react';

export default class NewSongList extends Component {
	render () {
		return (
			<div className="new-song-list">
				<div className="list-title">亚洲好书榜实时趋势</div>
				<ul className="list-rank">
					<li>
						<div>
							<span>1</span>{this.props.newSongList[0].bookName}
						</div>
						<div>

						</div>
					</li>
					<li>
						<div>
							<span>2</span>{this.props.newSongList[1].bookName}
						</div>
						<div>
						</div>
					</li>
					<li>
						<div>
							<span>2</span>{this.props.newSongList[2].bookName}
						</div>
						<div>
						</div>
					</li>
				</ul>
				<div className="list-more">查看更多<em className="">a</em></div>
			</div>

		);
	}
}