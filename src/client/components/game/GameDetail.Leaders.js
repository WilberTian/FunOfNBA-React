import React, { PropTypes, Component } from 'react'

import teamSettings from '../../utils/team.settings'

export default class GameDetailLeaders extends Component {
	render() {
		let game = this.props.gameDetail

		let homeLeads = game.detail.data.home.Leaders
		let visitorLeads = game.detail.data.visitor.Leaders

		return (
			<div className='row'>
				<div className='detail-header' style={{borderBottom: '3px solid ' + teamSettings[game.home.id].color}}>Team Leaders</div>
				{ game.detail.loaded && homeLeads && visitorLeads && 
				<div>
					<div className="pull-left" style={{borderBottom: '5px solid ' + teamSettings[game.home.id].color}}>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + homeLeads['Points']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>POINTS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.home.id].color, textAlign: 'center'}}>{homeLeads['Points']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{homeLeads['Points']['leader'][0]['FirstName'] + '.' + homeLeads['Points']['leader'][0]['LastName']}</div>
						</div>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + homeLeads['Assists']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>ASSISTS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.home.id].color, textAlign: 'center'}}>{homeLeads['Assists']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{homeLeads['Assists']['leader'][0]['FirstName'] + '.' + homeLeads['Assists']['leader'][0]['LastName']}</div>
						</div>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + homeLeads['Rebounds']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>REBOUNDS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.home.id].color, textAlign: 'center'}}>{homeLeads['Rebounds']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{homeLeads['Rebounds']['leader'][0]['FirstName'] + '.' + homeLeads['Rebounds']['leader'][0]['LastName']}</div>
						</div>
					</div>
				
					<div className="pull-right" style={{borderBottom: '5px solid ' + teamSettings[game.visitor.id].color}}>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + visitorLeads['Points']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>POINTS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.visitor.id].color, textAlign: 'center'}}>{visitorLeads['Points']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{visitorLeads['Points']['leader'][0]['FirstName'] + '.' + visitorLeads['Points']['leader'][0]['LastName']}</div>
						</div>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + visitorLeads['Assists']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>ASSISTS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.visitor.id].color, textAlign: 'center'}}>{visitorLeads['Assists']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{visitorLeads['Assists']['leader'][0]['FirstName'] + '.' + visitorLeads['Assists']['leader'][0]['LastName']}</div>
						</div>
						<div style={{display: 'inline-block'}}>
							<img src={'http://stats.nba.com/media/players/700/' + visitorLeads['Rebounds']['leader'][0]['PersonID'] + '.png'} style={{width: '180px'}}/>
							<div style={{fontSize: '20px', textAlign: 'center'}}>REBOUNDS</div>
							<div style={{fontSize: '36px', color: teamSettings[game.visitor.id].color, textAlign: 'center'}}>{visitorLeads['Rebounds']['StatValue']}</div>
							<div style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>{visitorLeads['Rebounds']['leader'][0]['FirstName'] + '.' + visitorLeads['Rebounds']['leader'][0]['LastName']}</div>
						</div>
					</div>
				</div>
				}
			</div>
		)
	}
}