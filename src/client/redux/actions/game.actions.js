export const GET_GAME_LIST = 'GET_GAME_LIST'

export const getGameList = (year, month, day) => {
	return (dispatch) => {
		return window.fetch(`/gamegeneral/${year}/${month}/${day}`)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: GET_GAME_LIST,
					unstart: json.unstart,
					live: json.live,
					over: json.over,
					gameListLoaded: true
				})
			})
			.catch(err => console.error(err))
	}

}

export const CHANGE_GAME_DATE ='CHANGE_GAME_DATE'

export const changeGameDate = () => {
	return {
		type: CHANGE_GAME_DATE,
		gameListLoaded: false
	}
}

export const GET_GAME_DETAIL = 'GET_GAME_DETAIL'

export const getGameDetail = (year, month, day, gameid) => {
	return (dispatch) => {
		return window.fetch(`/gamedetail/${year}/${month}/${day}/${gameid}`)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: GET_GAME_DETAIL,
					gameDetail: json,
					gameId: gameid
				})
			})
			.catch(err => console.error(err))
	}

}