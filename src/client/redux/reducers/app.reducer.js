import { CHANGE_TAB_IDX } from '../actions/app.actions'

let initState = {
	tabIdx: 0
};

export default function appReducer(state=initState, action) {
	switch(action.type) {
        case CHANGE_TAB_IDX:
            return Object.assign({}, state, {
                tabIdx: action.idx
            });

        default:
            return state;
    }

}
