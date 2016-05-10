import { GET_TEAM_LIST } from '../actions/team.actions'

let initState = {
    loaded: false,
	teamListData: {
		eastern: [],
		western: []
	},
	teamDetailData: []
};

export default function teamReducer(state=initState, action) {
	switch(action.type) {
        case GET_TEAM_LIST:
            return Object.assign({}, state, {
                teamListData: action.teamListData,
                loaded: true
            });

        default:
            return state;
    }

}