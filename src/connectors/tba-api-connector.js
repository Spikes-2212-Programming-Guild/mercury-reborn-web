import axios from "axios"
import * as mercuryAPI from "./mercury-api-connector"

const tbaAddress = "https://www.thebluealliance.com/api/v3"

const compLevelOrder = {
  qm: 0,
  qf: 1,
  sf: 2,
  f: 3
}

export async function initializeConnection() {
  const tbaKey = await mercuryAPI.fetchEventKey()
  axios.defaults.headers.common["X-TBA-Auth-Key"] = tbaKey
}

export async function checkStatus() {
  const statusResponse = await axios.get(`${tbaAddress}/status`)
  return statusResponse.status
}

async function fetchMatchesForEvent(eventKey) {
  const result = (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data

  return result.map(game => ({
    number: game.match_number,
    blue: game.alliances.blue.team_keys,
    red: game.alliances.red.team_keys,
    comp_level: game.comp_level
  })).sort((a, b) => {
    a = compLevelOrder[a.comp_level]
    b = compLevelOrder[b.comp_level]

    if (a > b) return 1
    if (a < b) return -1
    return 0
  })
}

export async function fetchMatchesForCurrentEvent() {
  const eventKey = await mercuryAPI.fetchEventKey()
  return await fetchMatchesForEvent(eventKey)
}