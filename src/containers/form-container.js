import {Container} from "unstated"

class FormContainer extends Container {
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
}

export default FormContainer
