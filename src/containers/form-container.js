import {Container} from "unstated"

class FormContainer extends Container {
  constructor() {
    super()
    this.state = {
      form: {}
    }
  }

  initialize(form) {
    this.setState({form})
  }
}

export default FormContainer
