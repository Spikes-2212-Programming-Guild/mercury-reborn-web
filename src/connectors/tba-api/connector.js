import axios from "axios"
import * as mercuryAPI from "../mercury-api-connector"
import {filterScoutingMenuProperties, sortMatchesByCompLevel} from "./data-filters"
import * as configManager from "../../util/config-manager"

const tbaAddress = "https://www.thebluealliance.com/api/v3"



export async function initializeConnection() {
  axios.defaults.headers.common["X-TBA-Auth-Key"] = configManager.getTBAKey()
}

export async function checkStatus() {
  const statusResponse = await axios.get(`${tbaAddress}/status`)
  return statusResponse.status
}

async function fetchMatchesForEvent(eventKey) {
  return (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data
}

export async function fetchMatchesForScoutingMenu() {
  const eventKey = await configManager.getEventKey()
  let matches = await fetchMatchesForEvent(eventKey)
  matches = filterScoutingMenuProperties(matches)
  matches = sortMatchesByCompLevel(matches)
  return matches
}