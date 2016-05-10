import React, { PorpTypes, Component } from 'react'

import UnstartGame from './GameList.UnstartGame'
import LiveGame from './GameList.LiveGame'
import OverGame from './GameList.OverGame'


export default class GameList extends Component {

	constructor (props) {
		super(props)
	}

	componentDidMount() {
		let { gameState, gameActions, gameDate } = this.props

		if(!gameState.gameListLoaded) {
			gameActions.getGameList(gameDate[0], gameDate[1], gameDate[2])
		}
		
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.gameDate !== nextProps.gameDate) {
			let { gameActions, gameDate }= nextProps

			gameActions.getGameList(gameDate[0], gameDate[1], gameDate[2])
		}
	}

	render() {
		let { unstart, live, over, gameListLoaded } = this.props.gameState;
		let { setGameId, selectedGameId } = this.props

		return (
		<div>
			{!gameListLoaded && <h2>Loading game list!!!</h2>}

			{ gameListLoaded && over.length > 0 &&
			<div className="panel panel-success row">
				<div className="panel-heading">Over</div>
				<ul className="list-group">
			    	{ over.map((game, index) => 
			    		<a className="list-group-item">
			    			<OverGame key={index} game={game} gameIdx={index} setGameId={setGameId} />
			    		</a> )}
			    </ul>
			</div>
			}

			{ gameListLoaded && live.length > 0 &&
			<div className="panel panel-info row">
				<div className="panel-heading">Live</div>
			  	<ul className="list-group">
			    	{ live.map((game, index) => 
			    		<a className="list-group-item">
			    			<LiveGame key={index} game={game} gameIdx={index} setGameId={setGameId} selectedGameId={selectedGameId} />
			    		</a> )}
			  	</ul>
			</div>
			}

			{ gameListLoaded && unstart.length > 0 &&
			<div className="panel panel-default row">
				<div className="panel-heading">Unstart</div>
			  	<ul className="list-group">
			    	{ unstart.map((game, index) => 
			    		<li className="list-group-item">
			    			<UnstartGame key={index} game={game} />
			    		</li> )}
			  	</ul>
			</div>
			}
		</div>
		)
	}

}