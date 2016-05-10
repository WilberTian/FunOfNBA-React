import React, { PropTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class GameDetailStats extends Component {
	render() {
		let game = this.props.gameDetail

		let homeStats = game.detail.data.home.stats
		let visitorStats = game.detail.data.visitor.stats
		/*

		game.detail.data.home.stats

		1.	assists:"22"
2.	blocks:"7"
3.	field_goals_attempted:"83"
4.	field_goals_made:"40"
5.		field_goals_percentage:"48.2"
6.	fouls:"16"
7.	free_throws_attempted:"14"
8.	free_throws_made:"10"
9.		free_throws_percentage:"71.4"
10.	full_timeout_remaining:"0"
11.		points:"99"
12.	rebounds_defensive:"33"
13.	rebounds_offensive:"9"
14.	short_timeout_remaining:"0"
15.	steals:"9"
16.	team_fouls:"2"
17.	team_rebounds:"10"
18.	team_turnovers:"1"
19.	technical_fouls:"0"
20.	three_pointers_attempted:"31"
21.	three_pointers_made:"9"
22.	three_pointers_percentage:"29.0"
23.	turnovers:"12"

		*/

		return (
			<div className='row'>
				<div className='detail-header' style={{borderBottom: '3px solid ' + teamSettings[game.home.id].color}}>Team Stats</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.points, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.points-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.points, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />
					
					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>PTS</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.points + ' - ' + visitorStats.points}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*(parseInt(homeStats.rebounds_defensive, 10) + parseInt(homeStats.rebounds_offensive, 10)), height: '20', position: 'relative', left: '50%', marginLeft: -3*(parseInt(homeStats.rebounds_defensive, 10) + parseInt(homeStats.rebounds_offensive, 10))-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*(parseInt(visitorStats.rebounds_defensive, 10) + parseInt(visitorStats.rebounds_offensive, 10)), height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>REB</div>
						<span style={{fontWeight: 'bold'}}>{(parseInt(homeStats.rebounds_defensive, 10) + parseInt(homeStats.rebounds_offensive, 10)) + ' - ' + (parseInt(visitorStats.rebounds_defensive, 10) + parseInt(visitorStats.rebounds_offensive, 10))}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.assists, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.assists-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.assists, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>AST</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.assists + ' - ' + visitorStats.assists}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.steals, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.steals-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.steals, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>STL</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.steals + ' - ' + visitorStats.steals}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.blocks, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.blocks-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.blocks, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>BLK</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.blocks + ' - ' + visitorStats.blocks}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.field_goals_percentage, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.field_goals_percentage-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.field_goals_percentage, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>FG%</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.field_goals_percentage + ' - ' + visitorStats.field_goals_percentage}</span>
					</div>
				</div>

				<div className='col-md-offset-1 col-md-10'>
					<div style={{backgroundColor: teamSettings[game.home.id].color, width: 3*homeStats.three_pointers_percentage, height: '20', position: 'relative', left: '50%', marginLeft: -3*homeStats.three_pointers_percentage-30, top: '36', display: 'inline-block'}} />
					<div style={{backgroundColor: teamSettings[game.visitor.id].color, width: 3*visitorStats.three_pointers_percentage, height: '20', position: 'relative', left: '50%', marginLeft: 60, top: '36', display: 'inline-block'}} />

					<div style={{width: '100', textAlign: 'center', margin: 'auto', position: 'relative'}}>
						<div style={{fontSize: '24', fontWeight: 'bold', fontWeight: 'bold'}}>3P%</div>
						<span style={{fontWeight: 'bold'}}>{homeStats.three_pointers_percentage + ' - ' + visitorStats.three_pointers_percentage}</span>
					</div>
				</div>
				
			</div>
		)
	}
}