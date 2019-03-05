import axios from "axios"
import {
  filterScoutingMenuProperties,
  filterSpecificMatches,
  filterTeamProperties,
  sortMatchesByCompLevel,
  sortTeams
} from "./data-filters"
import * as configManager from "../../util/config-manager"

const tbaAddress = "https://www.thebluealliance.com/api/v3"

export async function initializeConnection () {
  axios.defaults.headers.common["X-TBA-Auth-Key"] = await configManager.getTBAKey()
}

export async function checkStatus () {
  const statusResponse = await axios.get(`${tbaAddress}/status`)
  return statusResponse.status
}

async function fetchMatchesForEvent (eventKey) {
  return (await axios.get(`${tbaAddress}/event/${eventKey}/matches/simple`)).data
}

async function fetchTeamsForEvent (eventKey) {
  return (await axios.get(`${tbaAddress}/event/${eventKey}/teams`)).data
}

export async function fetchMatchesForScoutingMenu (matchesFilter) {
  const eventKey = await configManager.getEventKey()
  let matches = await fetchMatchesForEvent(eventKey)
  matches = filterScoutingMenuProperties(matches)
  matches = sortMatchesByCompLevel(matches)
  if (matchesFilter) {
    matches = filterSpecificMatches(matches, matchesFilter)
  }
  return matches
}

export async function fetchTeamsForTeamsList () {
  const eventKey = await configManager.getEventKey()
  let teams = await fetchTeamsForEvent(eventKey)
  teams = filterTeamProperties(teams)
  return sortTeams(teams)
}