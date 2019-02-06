import axios from "axios"
import * as mercuryAPI from "../mercury-api-connector"
import {filterScoutingMenuProperties, sortMatchesByCompLevel} from "./data-filters"

const tbaAddress = "https://www.thebluealliance.com/api/v3"



export async function initializeConnection() {
  const tbaKey = await mercuryAPI.fetchEventKey()
  axios.defaults.headers.common["X-TBA-Auth-Key"] = tbaKey
}

export async function checkStatus() {
  const statusResponse = await axios.get(`${tbaAddress}/status`)
  return statusResponse.status
}

async function fetchMatchesForEvent(eventKey) {
  return (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data
}

export async function fetchMatchesForScoutingMenu() {
  const eventKey = await mercuryAPI.fetchEventKey()
  let matches = await fetchMatchesForEvent(eventKey)
  matches = filterScoutingMenuProperties(matches)
  matches = sortMatchesByCompLevel(matches)
  return matches
}