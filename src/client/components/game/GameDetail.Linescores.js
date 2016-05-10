import React, { PropTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class GameDetailLinescores extends Component {
	render() {
		let game = this.props.gameDetail

		return (
			<div className='row'>
				<div className='detail-header' style={{borderBottom: '3px solid ' + teamSettings[game.home.id].color}}>Linescores</div>

				<div className="list-group">
					{ game.detail.loaded && game.detail.data.home.linescores.period.length && game.detail.data.home.linescores.period.map((period, index) => {
						let homeScore = period.score
						let visitorScore = game.detail.data.visitor.linescores.period[index].score

						return (
						<div className="list-group-item" key={index}>
							<div className="pull-left" style={{marginRight: '20px', fontWeight: 'bold', fontSize: '32'}}>{period.period_name}</div>
							<div style={{display: 'inline-block'}}>
								<div>
									<div style={{display: 'inline-block', verticalAlign: 'middle', backgroundColor: teamSettings[game.home.id].color, width: 10*homeScore, height: '16'}} />
									<span className='linescore-badge' style={{fontWeight: 'bold'}}>{homeScore}</span>
								</div>
								<div>
									<div style={{display: 'inline-block', verticalAlign: 'middle', backgroundColor: teamSettings[game.visitor.id].color, width: 10*visitorScore, height: '16'}} />
									<span className='linescore-badge' style={{fontWeight: 'bold'}}>{visitorScore}</span>
								</div>
							</div>
						</div>
						)
					})}
				</div>
			</div>

		)
	}
}