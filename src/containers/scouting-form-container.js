import { createContainer } from "unstated-next"
import { useState } from "react"

const ScoutingFormContainer = () => {
  const [form, setForm] = useState({})

  const set = (subform, question, answer) => {
    const newForm = {...form}
    newForm[subform][question].value = answer
    setForm(newForm)
  }

  const get = (subform, question) => {
    return (form[subform] && form[subform][question]) ? form[subform][question].value : ""
  }
  const initialize = (formConfig) => {
    const newForm = {}
    for (const subform in formConfig) {
      newForm[subform] = {}
      for (const question of formConfig[subform]) {
        const {name, optional, type} = question
        const value = (type === "number") ? 0 : ""

        newForm[subform][name] = {value, optional}
      }
    }
    console.log(newForm)
    setForm(newForm)
  }

  const packValues = () => {
    const result = {}
    console.log(form)
    for (const subform in form) {
      result[subform] = {}
      for (const question in form[subform]) {
        const {value} = form[subform][question]
        console.log(subform, question, value)
        result[subform][question] = value
      }
    }
    return result
  }

  return {form, set, get, initialize, packValues}

}

export default createContainer(ScoutingFormContainer)