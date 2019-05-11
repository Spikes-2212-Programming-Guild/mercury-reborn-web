import { Container } from "unstated"

class ScoutingFormContainer extends Container {
  constructor(formConsumer) {
    super()
    this.state = {
      form: {},
      formConsumer
    }
  }

  initialize(form, matchMetadata) {
    const newForm = {}
    // formats the questions to the form
    for (const section in form) {
      newForm[section] = {}
      for (const question of form[section]) {
        if (question.type === "number") {
          newForm[section][question.name] = 0
        } else {
          newForm[section][question.name] = ""
        }
      }
    }
    // formats the params to the form
    this.state.matchMetadata = matchMetadata

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
    const {matchMetadata} = this.state
    for (const param in matchMetadata) {
      form[param] = matchMetadata[param]
    }
    return formConsumer(form)
  }
}

export default ScoutingFormContainer
