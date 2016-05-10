var address = require('./address')
var producer = require('./producer')
var fetch = require('node-fetch')

const services = {

  getGameGeneral: function(year, month, date) {
    const gen_url = address.gameGeneral(`${year}${month}${date}`)
    return fetch(gen_url)
      .then(res => res.json())
      .then(data => {
        const allGames = producer.gameGeneral(data)
        if (allGames.live.length + allGames.unstart.length + allGames.over.length === 0) {
          return this.getGameGeneral(year, month, parseInt(date, 10) + 1)
        }
        allGames.gameDate = `${year}-${month}-${date}`
        return allGames
      })
  },

  getGameDetail: function(year, month, date, gameId) {
    const det_url = address.gameDetail(`${year}${month}${date}`, gameId)
    return fetch(det_url)
      .then(res => res.json())
      .then(data => producer.gameDetail(data))
  },
/*
  getLeagueStanding: function(year) {
    const stand_url = address.leagueStanding(year)
    return fetch(stand_url)
      .then(res => res.json())
      .then(data => producer.leagueStanding(data))
  }

  getPlayerList () {
    const url = address.playerList()
    return fetch(url)
      .then(res => res.json())
      .then(data => producer.playerList(data))
  }

  getPlayerInfo (id) {
    const url = address.playerInfo(id)
    return fetch(url)
      .then(res => res.json())
      .then(data => producer.playerInfo(data))
  }

  getPlayerLog (id) {
    const url = address.playerLog(id)
    return fetch(url)
      .then(res => res.json())
      .then(data => producer.playerLog(data))
  }
*/
  getTeamList: function(seasonType) {
    const urlEast = address.teamList('East', seasonType)
    const urlWest = address.teamList('West', seasonType)
    return Promise.all([
      fetch(urlEast)
        .then(res => res.json()),

      fetch(urlWest)
        .then(res => res.json())

    ])
      .then(result => {
        const eastTeams = result[0]
        const westTeams = result[1]
        return producer.teamList(eastTeams, westTeams)
      })
      
   
  },

  getTeamInfo: function(id) {
    const url = address.teamInfo(id)
    return fetch(url)
      .then(res => res.json())
      .then(data => producer.teamInfo(data))
  },

  getTeamDetail: function(id) {
    /* Get players data and basic info */
    const url = address.teamDetail(id)
    const urlBasic = address.teamDetailBasic(id)
    return Promise.all([
      fetch(url)
      .then(res => res.json())
      .then(data => producer.teamDetail(data)),
      fetch(urlBasic)
      .then(res => res.json())
      .then(data => producer.teamDetailBasic(data))
    ])
      .then(result => {
        const playerData = result[0]
        const playerInfo = result[1]
        return playerData.map(player => {
          return Object.assign({}, player, playerInfo[player.id])
        })
      })
  }
}

module.exports = services