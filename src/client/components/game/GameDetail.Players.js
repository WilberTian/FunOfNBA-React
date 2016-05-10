import React, { PropTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class GameDetailPlayers extends Component {
	render() {

		let game = this.props.gameDetail

		return(
		<div className='row'>
                  <div className='detail-header' style={{borderBottom: '3px solid ' + teamSettings[game.home.id].color}}>Team Players</div>
            	<div style={{fontSize: '24px', fontWeight: 'bold', color: teamSettings[game.home.id].color}}>{game.home.team + ': ' + game.home.score}</div>
            	{ game.detail.loaded && game.detail.data.home.player.length > 0 && 
            	<table className="table table-striped table-condensed">
            		<thead>
            			<tr>
            				<th>Name</th>
            				<th>P</th>
            				<th>PTS</th>
            				<th>AST</th>
            				<th>REB</th>
            				<th>FG</th>
            				<th>BLK</th>
            				<th>STL</th>
            				<th>3PT</th>
            				<th>FT</th>
            				<th>TO</th>
            				<th>PF</th>
            				<th>+/-</th>
            				<th>MIN</th>
            			</tr>
            		</thead>
            		<tbody>
            		{game.detail.data.home.player.map((player, index) => {
            			return (
            			<tr key={index}>
            				<td>{player.first_name + '.' + player.last_name}</td>
            				<td>{player.starting_position ? player.starting_position : '-'}</td>
            				<td>{player.points}</td>
            				<td>{player.assists}</td>
            				<td>{parseInt(player.rebounds_defensive, 10) + parseInt(player.rebounds_offensive, 10)} {'[' + player.rebounds_defensive + '/' + player.rebounds_offensive + ']'}</td>
            				<td>{player.field_goals_made + '/' + player.field_goals_attempted}</td>
            				<td>{player.blocks}</td>
            				<td>{player.steals}</td>
            				<td>{player.three_pointers_made + '/' + player.three_pointers_attempted}</td>
            				<td>{player.free_throws_made + '/' + player.free_throws_attempted}</td>
            				<td>{player.turnovers}</td>
            				<td>{player.fouls}</td>
            				<td>{player.plus_minus}</td>
            				<td>{player.minutes}</td>
            			</tr>)
            		})}
            		</tbody>
            	</table>
            	}

			
            	<div style={{fontSize: '24px', fontWeight: 'bold', color: teamSettings[game.visitor.id].color}}>{game.visitor.team + ': ' + game.visitor.score}</div>

            	{ game.detail.loaded && game.detail.data.visitor.player.length > 0 && 
            	<table className="table table-striped table-condensed">
            		<thead>
            			<tr>
            				<th>Name</th>
            				<th>P</th>
            				<th>PTS</th>
            				<th>AST</th>
            				<th>REB</th>
            				<th>FG</th>
            				<th>BLK</th>
            				<th>STL</th>
            				<th>3PT</th>
            				<th>FT</th>
            				<th>TO</th>
            				<th>PF</th>
            				<th>+/-</th>
            				<th>MIN</th>
            			</tr>
            		</thead>
            		<tbody>
            		{game.detail.data.visitor.player.map((player, index) => {

            			return (
            			<tr key={index}>
            				<td>{player.first_name + '.' + player.last_name}</td>
            				<td>{player.starting_position ? player.starting_position : '-'}</td>
            				<td>{player.points}</td>
            				<td>{player.assists}</td>
            				<td>{parseInt(player.rebounds_defensive, 10) + parseInt(player.rebounds_offensive, 10)} {'[' + player.rebounds_defensive + '/' + player.rebounds_offensive + ']'}</td>
            				<td>{player.field_goals_made + '/' + player.field_goals_attempted}</td>
            				<td>{player.blocks}</td>
            				<td>{player.steals}</td>
            				<td>{player.three_pointers_made + '/' + player.three_pointers_attempted}</td>
            				<td>{player.free_throws_made + '/' + player.free_throws_attempted}</td>
            				<td>{player.turnovers}</td>
            				<td>{player.fouls}</td>
            				<td>{player.plus_minus}</td>
            				<td>{player.minutes}</td>
            			</tr>)
            		})}
            		</tbody>
            	</table>
            	}

		</div>
		)
	}
}