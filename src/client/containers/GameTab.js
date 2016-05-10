import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import * as gameActions from '../redux/actions/game.actions'
import GameList from '../components/game/GameList'
import GameDetail from '../components/game/GameDetail'

export default class GameTab extends Component {
	constructor (props) {
		super(props)

		this.state = {
		    gameDate: this._getToday(),
		    selectedGameId: '',
		    selectedGameType:'',
			gameIdx: -1
		}
	}


	render() {
		let { unstart, live, over } = this.props.gameState
		const { getGameDetail } = this.props.gameActions
		let { selectedGameType, gameIdx } = this.state

		return (
		<div>
			<div className='col-md-3' style={{padding: '0 50 0 20'}}>
				<nav>
				  	<ul className="pager">
				    	<li className="previous"><a onClick={this._setPreviousDate.bind(this)}><span className="glyphicon glyphicon-chevron-left"></span></a></li>
				    	<li>{this.state.gameDate[0] + '-' + this.state.gameDate[1] + '-' + this.state.gameDate[2]}</li>
				    	<li className="next"><a onClick={this._setNextDate.bind(this)}><span className="glyphicon glyphicon-chevron-right"></span></a></li>
				  	</ul>
				</nav>

				<GameList {...this.props} gameDate={this.state.gameDate} setGameId={this._setGameId.bind(this)} selectedGameId={this.state.selectedGameId} />
			</div>

			{this.state.selectedGameId !== '' 
				&& this.state.gameIdx > -1 
				&& <GameDetail {...this.state} getGameDetail={getGameDetail} gameDetail={this.props.gameState[selectedGameType][gameIdx]}/>}

		</div>
		)
	}

	_setGameId(gameId, gameType, idx) {
		this.setState({
			selectedGameId: gameId,
			selectedGameType: gameType,
			gameIdx: idx
		})
	}

	_getToday() {
		const dateString = moment(Date.now()).format()
		const dateArray = dateString.replace('T', '-').split('-')
    	return dateArray.splice(0, 3)
	}


	_setPreviousDate() {
		let d = new Date()
		d.setFullYear(this.state.gameDate[0], this.state.gameDate[1] - 1, this.state.gameDate[2])
		d.setDate(d.getDate() - 1)
		const dateString = moment(d).format()
		const dateArray = dateString.replace('T', '-').split('-')
		this.setState({
			gameDate: dateArray.splice(0, 3)
		})

		this.props.gameActions.changeGameDate()

		this.state = {
		    selectedGameId: '',
		    selectedGameType:'',
			gameIdx: -1
		}
	}

	_setNextDate() {
		let d = new Date()
		d.setFullYear(this.state.gameDate[0], this.state.gameDate[1] - 1, this.state.gameDate[2])
		d.setDate(d.getDate() + 1)
		const dateString = moment(d).format()
		const dateArray = dateString.replace('T', '-').split('-')

		this.setState({
			gameDate: dateArray.splice(0, 3)
		})

		this.props.gameActions.changeGameDate()

		this.state = {
		    selectedGameId: '',
		    selectedGameType:'',
			gameIdx: -1
		}
	}
}

const mapStateToProps = (state) => {
	return {
		gameState: state.gameReducer
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		gameActions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapActionsToProps)(GameTab)