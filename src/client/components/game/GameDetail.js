import React, { PropTypes, Component } from 'react'

import GameDetailLinescores from './GameDetail.Linescores'
import GameDetailStats from './GameDetail.Stats'
import GameDetailPlayers from './GameDetail.Players'
import GameDetailLeaders from './GameDetail.Leaders'


import '../../styles/game-detail.css'

export default class GameDetail extends Component {

	componentDidMount() {
		let { getGameDetail, selectedGameId, gameDate, gameDetail } = this.props
		if(!gameDetail.detail.loaded) {
			getGameDetail(gameDate[0], gameDate[1], gameDate[2], selectedGameId)
		}
	}

	
	componentWillReceiveProps(nextProps) {
		if(this.props.selectedGameId !== nextProps.selectedGameId) {
			let { getGameDetail, selectedGameId, gameDate, selectedGameType, gameDetail } = nextProps
			if(selectedGameType === 'over' && !gameDetail.detail.loaded) {
				getGameDetail(gameDate[0], gameDate[1], gameDate[2], selectedGameId)
			}	
		}

		let { getGameDetail, selectedGameId, gameDate, selectedGameType } = nextProps
		if(selectedGameType === 'live') {
			setTimeout(function(){
				getGameDetail(gameDate[0], gameDate[1], gameDate[2], selectedGameId)
			}, 10000)
		}
	}

	render() {
		let game = this.props.gameDetail

		return(
		<div className="col-md-9">
			{!game.detail.loaded && <h2>Loading game detail!!!</h2>}
			{game.detail.loaded && <GameDetailLinescores gameDetail={this.props.gameDetail} />}
			{game.detail.loaded && game.type !== 'live' && <GameDetailStats gameDetail={this.props.gameDetail} />}
			{game.detail.loaded && <GameDetailPlayers gameDetail={this.props.gameDetail} />}
			{game.detail.loaded && game.type !== 'live' && <GameDetailLeaders gameDetail={this.props.gameDetail} />}	
						
		</div>
		)
	}

}