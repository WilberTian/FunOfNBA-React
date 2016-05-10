const d = new Date()
const currentMonth = d.getMonth() + 1
var season
if (currentMonth >= 10) {
  season = d.getFullYear().toString() + '-' + (d.getFullYear() + 1).toString().substring(2, 4)
} else {
  season = (d.getFullYear().toString() - 1) + '-' + d.getFullYear().toString().substring(2, 4)
}

const address = {
  /**
   * All game of the date
   * @params gameDate: {String} {Format: yearmonthdate}
   * @example gameDate: 20151125
   */
  gameGeneral: (gameDate) => {
    return `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${gameDate}/games.json`
  },
  /**
   * Detail of a game in a specific date
   * @params gameDate: {String} {Format: yearmonthdate} & gameId: {String}
   * @example gameDate: 20151128 & gameId: 0021500239
   */
  gameDetail: (gameDate, gameId) => {
    return `http://data.nba.com/data/10s/json/cms/noseason/game/${gameDate}/${gameId}/boxscore.json`
  },
  /**
   * Current league standing
   * @params year {String}
   * @example year: 2015
   */
  leagueStanding: (year) => {
    return `http://data.nba.com/data/json/cms/${year}/league/standings.json`
  },

  playerList: () => {
    return `http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&Season=${season}`
  },

  playerInfo: (id) => {
    return `http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=${id}&SeasonType=Regular+Season`
  },

  playerLog: (id) => {
    return `http://stats.nba.com/stats/playergamelog?LeagueID=00&PerMode=PerGame&PlayerID=${id}&Season=${season}&SeasonType=Regular+Season`
  },

 /**
  * @params gameDate month/date/year
  */
  teamList: (conference, seasonType) => {
    return `http://stats.nba.com/stats/leaguedashteamstats?Conference=${conference}&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=${seasonType}&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=`
  },

  teamInfo: (id) => {
    return `http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=${id}&season=${season}`
  },

  teamDetail: (id) => {
    return `http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=${season}&SeasonSegment=&SeasonType=Regular+Season&TeamID=${id}&VsConference=&VsDivision=`
  },

  teamDetailBasic: (id) => {
    return `http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=${season}&TeamID=${id}`
  }
}

module.exports = address
