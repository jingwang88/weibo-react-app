import React, {Component} from 'react';

export default class NewSongList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isDisplay: [true, false, false]
		};
	}
	handleMouseover(event) {
		let key = event.currentTarget.getAttribute("data-index");
		this.setState({
			isDisplay: [
				// 注意key类型为字符串类型 
				(key == 1 ? true : false),
				(key == 2 ? true : false),
				(key == 3 ? true : false),
			]
		});
	}
	render () {
		var i = 0; 
		return (
			<div className="new-song-list right_content_block">
				<div className="list-title">亚洲好书榜实时趋势</div>
				<ul className="list-rank">
				{
					this.props.newSongList.map((newSongList) => {
						i++;
						return (
							<li className="song-info" key={i} data-index={i} onMouseOver={this.handleMouseover.bind(this)}>
								{
									this.state.isDisplay[i-1] ? 
									(<div className="song-details detail">
										<img src={newSongList.img}/>
										<div className="song-details-content">
											<div className="song-description">
												<p><span className="index">{i}</span>{newSongList.bookName}</p>
											</div>
											<div>{newSongList.author}</div>
											<div className="song-score">{newSongList.rankScore}分</div>
										</div>
									</div>)
									: 
									(<div className="song-description description">
										<p><span className="index">{i}</span>{newSongList.bookName}</p>
									</div>)
								}
							</li>
						);
					})
				}
				</ul>
				<div className="list-more more">查看更多<em>a</em></div>
			</div>

		);
	}
}