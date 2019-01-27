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

async function fetchMatchesForEvent(eventKey, pipeline) {
  let result = (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data

  if (pipeline && pipeline !== []) {
    pipeline.map(fn => {result = fn(result)})
    return result
  }
  return result
}

async function fetchMatchesForCurrentEvent(pipeline) {
  const eventKey = await mercuryAPI.fetchEventKey()
  return await fetchMatchesForEvent(eventKey, pipeline)
}

export function fetchMatchesForScoutingMenu() {
  return fetchMatchesForCurrentEvent([filterScoutingMenuProperties, sortMatchesByCompLevel])
}