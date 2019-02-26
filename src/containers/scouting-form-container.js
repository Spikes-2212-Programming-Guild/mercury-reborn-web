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

  initialize(form, teamNumber, matchName) {
    this.setState({form: {}})
    const newForm = {}
    for (const section in form) {
      newForm[section] = {}
      for (const question of form[section]) {
        newForm[section][question.name] = ""
      }
    }
    newForm.matchName = matchName
    this.setState({form: newForm, teamNumber})
  }

  set(section, question, answer) {
    const form = this.state.form
    form[section][question] = answer
    this.setState({form})
  }

  submit() {
    const {teamNumber, form} = this.state
    submitMatch(teamNumber, form)
  }
}

export default ScoutingFormContainer
