import axios from "axios"
import * as mercuryAPI from "./mercury-api-connector"

const tbaAddress = "https://www.thebluealliance.com/api/v3"

const compLevelOrder = {
  qm: 0,
  qf: 1,
  sf: 2,
  f: 3
}

export async function checkStatus() {
  const tbaKey = await mercuryAPI.fetchTBAKey()

  const statusResponse = await axios.get(`${tbaAddress}/status`, {
    headers: {
      "X-TBA-Auth-Key": tbaKey
    }
  })
  return statusResponse.status
}

async function fetchMatchesForEvent(tbaKey, eventKey) {
  const result = (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`, {
    headers: {
      "X-TBA-Auth-Key": tbaKey
    }
  })).data

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
  const tbaKey = await mercuryAPI.fetchTBAKey()
  const eventKey = await mercuryAPI.fetchEventKey()
  return await fetchMatchesForEvent(tbaKey, eventKey)
}