import axios from "axios"

export async function fetchLoginOptions () {
  return [{text: "scouting", value: "scouting"}, {text: "tactics", value: "tactics"}]
}

export async function login (loginType, password) {
  return (await axios.get(`/login/${loginType}`, {
    params: {
      password: password
    }
  })).data
}

async function fetchConfigOption(option) {
  return (await axios.get(`/config/${option}`)).data
}

export const fetchTBAKey = () => fetchConfigOption("tba-key")
export const fetchEventName = () => fetchConfigOption("event-name")
export const fetchScoutingForm = () => fetchConfigOption("form")