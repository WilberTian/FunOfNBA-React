import React from 'react'
import { Route , IndexRoute  } from 'react-router'
import App from './containers/App'
import GameTab from './containers/GameTab'
import TeamTab from './containers/TeamTab'
import PlayoffTab from './containers/PlayoffTab'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={GameTab} />
    <Route path="/team-tab" component={TeamTab} />
    <Route path="/playoff-tab" component={PlayoffTab} />
  </Route>
)