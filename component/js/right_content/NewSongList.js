import React, {Component} from 'react';

export default class NewSongList extends Component {
	render () {
		var i = 0; 
		return (
			<div className="new-song-list">
				<div className="list-title">亚洲好书榜实时趋势</div>
				<ul className="list-rank">
				{
					this.props.newSongList.map((newSongList) => {
						i++;
						return (
							<li className="song-info">
								<div className="song-description">
									<span>{i}</span>{newSongList.bookName}
								</div>
								<div className="song-detail">
									<img src={newSongList.img}/>
									<div>
										<div><span>{i}</span>{newSongList.bookName}</div>
										<div>{newSongList.author}</div>
										<div>{newSongList.rankScore}</div>
									</div>
								</div>
							</li>
						);
					})
				}
				</ul>
				<div className="list-more more">查看更多<em className="">a</em></div>
			</div>

		);
	}
}