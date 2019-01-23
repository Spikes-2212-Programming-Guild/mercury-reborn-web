import {Container} from "unstated"
import {fetchScoutingForm} from "../connectors/mercury-api-connector";

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
