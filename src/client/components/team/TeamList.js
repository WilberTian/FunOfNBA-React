import React, { PropTypes, Component } from 'react'

import TeamItem from './TeamItem'

export default class TeamList extends Component {
	componentDidMount() {
		const { getTeamList } = this.props.teamActions
		let { loaded, teamListData } = this.props.teamState;
		if(!loaded) {
			getTeamList(this.props.seasonType)
		}
		
	}

	render() {
		let { loaded, teamListData } = this.props.teamState;

		return (
		<div className='row'>
			{!loaded && <h2>Loading team list!!!</h2>}

			{loaded && <div className='col-md-offset-2 col-md-4'>
				<h1>Eastern Conference</h1>
	            {teamListData['eastern'].map((team, index) =>
	                <TeamItem key={index} teamInfo={team} />
	            )}
			</div>}

			{loaded && <div className='col-md-4'>
				<h1>Western Conference</h1>
				{teamListData['western'].map((team, index) =>
	                <TeamItem key={index} teamInfo={team} />
	            )}
			</div>}
		</div>
		)
	}
}