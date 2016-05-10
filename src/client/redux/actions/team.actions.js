export const GET_TEAM_LIST = 'GET_TEAM_LIST'

export const getTeamList = (seasonType='Regular Season') => {
	return (dispatch) => {
		return window.fetch(`/teamlist/${seasonType}`)
			.then(response => response.json())
            .then(json => 
                dispatch({
				  type: GET_TEAM_LIST,
				  teamListData: json
				})
            )
			.catch(err => console.error(err))
	}
}