import * as _ from "lodash"
import { fetchEventKey, fetchScoutingForm, fetchTBAKey } from "../connectors/mercury-api-connector"

const entries = {
  scoutingForm: "form",
  eventKey: "event-id",
  tbaKey: "tba-key",

}

async function getScoutingForm () {
  let form = JSON.parse(localStorage.getItem(entries.scoutingForm))
  if (!form || form === "") {
    form = await fetchScoutingForm()
    localStorage.setItem(entries.scoutingForm, JSON.stringify(form))
  }
  return form
}

async function getTBAKey () {
  let tbaKey = localStorage.getItem(entries.tbaKey)

  if (!tbaKey || tbaKey === "") {
    tbaKey = await fetchTBAKey()
    localStorage.setItem(entries.tbaKey, tbaKey)
  }
  return tbaKey
}

async function getEventKey () {
  let eventKey = localStorage.getItem(entries.eventKey)

  if (!eventKey || eventKey === "") {
    eventKey = await fetchEventKey()
    localStorage.setItem(entries.eventKey, eventKey)
  }
  return eventKey
}

function reset() {
  _.map(entries, (value) => localStorage.setItem(value, ""))
}

export {
  getScoutingForm,
  getTBAKey,
  getEventKey,
  reset,
}