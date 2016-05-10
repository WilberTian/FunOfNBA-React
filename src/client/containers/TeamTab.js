import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import * as teamActions from '../redux/actions/team.actions'
import TeamList from '../components/team/TeamList'

export default class TeamTab extends Component {

	render() {
		return (
		<TeamList {...this.props} seasonType='Regular Season'/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		teamState: state.teamReducer
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		teamActions: bindActionCreators(teamActions, dispatch)
	}
}

export default connect(mapStateToProps, mapActionsToProps)(TeamTab)