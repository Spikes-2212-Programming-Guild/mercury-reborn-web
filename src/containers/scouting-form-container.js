import {Container} from "unstated"
import {submitMatch} from "../connectors/mercury-api-connector"

class ScoutingFormContainer extends Container {
  constructor() {
    super()
    this.state = {
      form: {},
      teamNumber: null
    }
  }

  initialize(form, matchParams) {
    const newForm = {}
    for (const section in form) {
      newForm[section] = {}
      for (const question of form[section]) {
        newForm[section][question.name] = ""
      }
    }
    for (const param in matchParams) {
      newForm[param] = matchParams[param]
    }

    this.setState({form: newForm}).then(() => console.log(this.state))
  }

  set(section, question, answer) {
    const {form} = this.state
    form[section][question] = answer
    this.setState({form})
  }

  get(section, question) {
    if (this.state.form[section]) {
      return this.state.form[section][question]
    }
    return ""
  }

  submit() {
    const {teamNumber, form} = this.state
    return submitMatch(teamNumber, form)
  }
}

export default ScoutingFormContainer
