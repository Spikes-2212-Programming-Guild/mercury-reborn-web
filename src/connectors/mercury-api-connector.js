import axios from "axios"

export function fetchLoginOptions () {
  return new Promise(function (resolve) {
    resolve([{text: "scouting", value: "scouting"}, {text: "tactics", value: "tactics"}])
  })
}

export function login (loginType, password) {
  return axios.get(`/login/${loginType}`, {
    params: {
      password: password
    }
  }).then(response => response.data)
}

export function fetchTBAKey() {
  return axios.get("/config/tba-key/")
    .then(response => response.data)
}