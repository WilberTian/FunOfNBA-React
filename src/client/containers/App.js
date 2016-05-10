import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import * as appActions from '../redux/actions/app.actions'

class App extends Component {
	
	
    render () {
    	let tabIdx = this.props.appState.tabIdx
    	let changeTabIdx = this.props.appActions.changeTabIdx

        return (
        <div>
            <nav className="navbar navbar-inverse navbar-static-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">FunOfNBA</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li onClick={() => changeTabIdx(0)} className={tabIdx == 0 ? 'active' : ''}>
                        <Link to={`/`}>Game</Link>
                    </li>
                    <li onClick={() => changeTabIdx(1)} className={tabIdx == 1 ? 'active' : ''}>
                        <Link to={`/team-tab`}>Team</Link>
                    </li>
                    <li onClick={() => changeTabIdx(2)} className={tabIdx == 2 ? 'active' : ''}>
                        <Link to={`/playoff-tab`}>Playoffs</Link>
                    </li>
                  </ul>
                </div> 
              </div> 
            </nav>
            <div className="container-fluid">
                {this.props.children}
            </div>
		</div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		appState: state.appReducer
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		appActions: bindActionCreators(appActions, dispatch)
	}
}

export default connect(mapStateToProps, mapActionsToProps)(App)