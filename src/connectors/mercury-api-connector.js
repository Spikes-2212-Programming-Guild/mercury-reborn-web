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
