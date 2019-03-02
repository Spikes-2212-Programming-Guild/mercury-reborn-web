import axios from "axios"

async function fetchConfigOption(option) {
  return (await axios.get(`/config/${option}`)).data
}

export const fetchTBAKey = () => fetchConfigOption("tba-key")
export const fetchEventKey = () => fetchConfigOption("event-name")
export const fetchScoutingForm = () => fetchConfigOption("form")
export const fetchPitForm = () => fetchConfigOption("pit-form")


export async function submitMatch (teamNumber, match) {
  return await axios.post("/match/submit", {teamNumber, match})
}
