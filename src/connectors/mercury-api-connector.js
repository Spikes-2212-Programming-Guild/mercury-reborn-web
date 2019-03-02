import axios from "axios"

async function fetchConfigOption(option) {
  return (await axios.get(`/config/${option}`)).data
}

export const fetchTBAKey = () => fetchConfigOption("tba-key")
export const fetchEventKey = () => fetchConfigOption("event-name")
export const fetchScoutingForm = () => fetchConfigOption("form")


export async function submitFieldForm (match) {
  return await axios.post("/scouting/field/match/submit", {match})
}

export async function submitPitForm(form) {
  return await axios.post("/scouting/pit/team/submit", {form})
}

export async function submitViewerForm(match) {
  return await axios.post("/scouting/viewer/match/submit", {match})
}