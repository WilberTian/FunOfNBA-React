import React, { PorpTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class OverGame extends Component {
	render() {
		let game = this.props.game
		
		return (
			<div className='row' onClick={this._selectGame.bind(this)} style={{padding: '0 10 0 10'}}>
				<div className='pull-left' >
					<img src={ teamSettings[game.home.id].logo } alt={game.home.team} style={{width: '80'}}/>
                	<span style={{fontSize: '36px', color: teamSettings[game.home.id].color, verticalAlign:'middle'}}>{game.home.score}</span>
                	<div style={{fontWeight: 'bold', textAlign: 'center'}}>{game.home.team}</div>
                </div>
                <div className='pull-right'>
                	
                	<span style={{fontSize: '36px',color: teamSettings[game.visitor.id].color, verticalAlign:'middle' }}>{game.visitor.score}</span>
                	<img src={ teamSettings[game.visitor.id].logo } alt={game.visitor.team} style={{width: '80'}}/>
                	<div style={{fontWeight: 'bold', textAlign: 'center'}}>{game.visitor.team}</div>
                </div>
            </div>
		)
	}

	_selectGame() {
		this.props.setGameId(this.props.game.id, this.props.game.type, this.props.gameIdx)
	}
}