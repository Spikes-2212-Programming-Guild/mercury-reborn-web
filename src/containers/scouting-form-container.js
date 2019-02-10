import {Container} from "unstated"

class ScoutingFormContainer extends Container {
  constructor() {
    super()
    this.state = {
      form: {}
    }
  }

  initialize(form) {
    this.setState({form: {}})
    const newForm = {}
    Object.keys(form).map(section => {
      newForm[section] = {}
      form[section].map(question => {
        newForm[section][question.name] = ""
      })
    })

    this.setState({form: newForm})
  }

  set(section, question, answer) {
    const form = this.state.form
    form[section][question] = answer
    this.setState({form})
  }
}

export default ScoutingFormContainer
