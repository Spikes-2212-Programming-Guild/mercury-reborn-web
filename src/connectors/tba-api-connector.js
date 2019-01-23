import axios from "axios"
import {fetchTBAKey} from "./mercury-api-connector"
import * as mercuryAPI from "./mercury-api-connector"

const tbaAddress = "https://www.thebluealliance.com/api/v3"

export async function checkStatus() {
  const tbaKey = await fetchTBAKey()

  const statusResponse = await axios.get(`${tbaAddress}/status`, {
    headers: {
      "X-TBA-Auth-Key": tbaKey
    }
  })
  return statusResponse.status
}

export async function fetchGamesForEvent() {
  const tbaKey = await fetchTBAKey()
  const eventKey = await mercuryAPI.fetchEventKey()

  const result = (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`, {
    headers: {
      "X-TBA-Auth-Key": tbaKey
    }
  })).data

  return result.map(game => ({
    blue: game.alliances.blue.team_keys,
    red: game.alliances.red.team_keys,
    comp_level: game.comp_level
  }))
}