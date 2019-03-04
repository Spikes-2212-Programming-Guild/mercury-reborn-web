import axios from "axios"

async function fetchConfigOption(option) {
  return (await axios.get(`/config/${option}`)).data
}

export const fetchTBAKey = () => fetchConfigOption("tba-key")
export const fetchEventKey = () => fetchConfigOption("event-name")
export const fetchScoutingForm = () => fetchConfigOption("field-form")
export const fetchPitForm = () => fetchConfigOption("pit-form")
export const fetchSpectatorForm = () => fetchConfigOption("spectator-form")


export async function submitFieldForm (match) {
  return await axios.post("/scouting/field/match/submit", {match})
}

export async function submitPitForm(form) {
  return await axios.post("/scouting/pit/team/submit", {form})
}

export async function submitSpectatorForm(match) {
  return await axios.post("/scouting/spectator/match/submit", {match})
}

export async function fetchSavedFieldMatches() {
  return (await axios.get("/tactics/field/match-names")).data
}

export async function fetchSavedPitScoutingTeams() {
  return (await axios.get("/tactics/pit/team-ids")).data
}

export async function fetchSavedSpectatorMatches() {
  return (await axios.get("/tactics/spectator/match-names")).data
}

export async function fetchFieldMatch(team_id, match_name) {
  return (await axios.get(`/tactics/field/match/${team_id}/${match_name}`)).data
}

export async function fetchPitScouting(team_id) {
  return (await axios.get(`/tactics/pit/team/${team_id}`)).data
}

export async function fetchSpectatorMatch(match_name) {
  return (await axios.get(`/tactics/spectator/match/${match_name}`)).data
}