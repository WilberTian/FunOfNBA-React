import React, { PropTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class TeamItem extends Component {

	render() {
		let { id, name, win, loss } = this.props.teamInfo

		let styles = {
			borderLeft: '15px solid ' + teamSettings[id].color,
			borderBottom: '5px solid ' + teamSettings[id].color,
			margin: '10px',
		}

		return (
		<div className='row'>
			<div className='col-md-11' style={styles}>
				<img className="pull-left" src={ teamSettings[id].logo } alt={name} style={{width:120,marginRight:20}}/>
				<div>
					<h3>{name}</h3>
					<div style={{fontSize: '16px', fontWeight: 'bold'}}>win-los: {win}:{loss}</div>
					<div className="pull-right">
						<a>Team detail</a><br/>
						<a>Players</a>
					</div>
				</div>
			</div>
		</div>
		)
		
	}

}