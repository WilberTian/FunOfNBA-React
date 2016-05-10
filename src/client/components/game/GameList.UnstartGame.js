import React, { PorpTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class UnstartGame extends Component {

	render() {
		let game = this.props.game

		return (
		<div className='row' style={{padding: '0 10 0 10'}}>
			<h4><span className='label label-primary'>{game.date}</span></h4>
			<div>
				<div className='pull-left' >
	            	<img src={ teamSettings[game.home.id].logo } alt={game.home.team} style={{width: '80'}}/>
	                <div style={{fontWeight: 'bold', textAlign: 'center'}}>{game.home.team}</div>
	            </div>
	            <div className='pull-right'>
	            	<img src={ teamSettings[game.visitor.id].logo } alt={game.visitor.team} style={{width: '80'}}/>
	            	<div style={{fontWeight: 'bold', textAlign: 'center'}}>{game.visitor.team}</div>
	            </div>
            </div>
        </div>

		)
	}
}