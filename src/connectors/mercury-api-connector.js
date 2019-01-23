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

export function fetchTBAKey() {
  console.log("bla")
  return axios.get("/config/tba-key/")
    .then(response => {
      console.log(response)
      return response.data
    })
}