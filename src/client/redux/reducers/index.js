import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import appReducer from './app.reducer'
import teamReducer from './team.reducer'
import gameReducer from './game.reducer'

const rootReducer = combineReducers({
    appReducer,
    teamReducer,
    gameReducer,
    routing
});

export default rootReducer;
