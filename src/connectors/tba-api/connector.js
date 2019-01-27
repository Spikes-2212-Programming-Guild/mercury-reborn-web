import axios from "axios"
import * as mercuryAPI from "../mercury-api-connector"

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

async function fetchMatchesForEvent(eventKey, pipeline) {
  let result = (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data

  if (pipeline && pipeline !== []) {
    pipeline.map(fn => {result = fn(result)})
    return result
  }
  return result
}

export async function fetchMatchesForCurrentEvent() {
  const eventKey = await mercuryAPI.fetchEventKey()
  return await fetchMatchesForEvent(eventKey)
}