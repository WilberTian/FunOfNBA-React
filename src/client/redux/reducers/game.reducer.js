import { GET_GAME_LIST, GET_GAME_DETAIL, CHANGE_GAME_DATE } from '../actions/game.actions'

let initState = {
    unstart: [],
    live: [],
    over: [],
    gameListLoaded: false
};

export default function gameReducer(state=initState, action) {
	switch(action.type) {
        case GET_GAME_LIST:
            return Object.assign({}, state, {
                unstart: action.unstart,
                live: action.live,
                over: action.over,
                gameListLoaded: action.gameListLoaded
            });

        case CHANGE_GAME_DATE:
            return Object.assign({}, state, {
                unstart: [],
                live: [],
                over: [],
                gameListLoaded: action.gameListLoaded
            })

        case GET_GAME_DETAIL:
            let newState = Object.assign({}, state)

            newState[action.gameDetail.type].forEach(game => {
                if(game.id === action.gameId) {
                    game.detail.data = action.gameDetail,
                    game.detail.loaded = true

                    if(action.gameDetail.type === 'live') {
                        game.home.score = action.gameDetail.home.score
                        game.visitor.score = action.gameDetail.visitor.score
                        game.process.quarter =action.gameDetail.process.quarter
                        game.process.time = action.gameDetail.process.time
                    }

                }
            })

            return newState
        default:
            return state;
    }

}