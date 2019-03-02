import {Container} from "unstated"
import {submitMatch} from "../connectors/mercury-api-connector"

class ScoutingFormContainer extends Container {
  constructor(formConsumer) {
    super()
    this.state = {
      form: {},
      formConsumer
    }
  }

  initialize(form, matchParams) {
    const newForm = {}
    // formats the questions to the form
    for (const section in form) {
      newForm[section] = {}
      for (const question of form[section]) {
        newForm[section][question.name] = ""
      }
    }
    // formats the params to the form
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
    const {form, formConsumer} = this.state
    return formConsumer(form)
  }
}

export default ScoutingFormContainer
