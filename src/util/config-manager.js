import { fetchEventKey, fetchPitForm, fetchSpectatorForm, fetchScoutingForm, fetchTBAKey } from "../connectors/mercury-api-connector"

const entries = {
  fieldForm: "field-form",
  pitForm: "pit-form",
  spectatorForm: "spectator-form",
  eventKey: "event-id",
  tbaKey: "tba-key",

}

async function getFieldForm () {
  let form = JSON.parse(localStorage.getItem(entries.fieldForm))
  if (!form) {
    form = await fetchScoutingForm()
    localStorage.setItem(entries.fieldForm, JSON.stringify(form))
  }
  return form
}

async function getPitForm() {
  let form = JSON.parse(localStorage.getItem(entries.pitFrom))
  if (!form) {
    form = await fetchPitForm()
    localStorage.setItem(entries.pitForm, JSON.stringify(form))
  }
  return form
}

async function getSpectatorForm() {
  let form = JSON.parse(localStorage.getItem(entries.spectatorForm))
  if (!form) {
    form = await fetchSpectatorForm()
    localStorage.setItem(entries.spectatorForm, JSON.stringify(form))
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


export {
  getFieldForm,
  getPitForm,
  getSpectatorForm,
  getTBAKey,
  getEventKey
}
