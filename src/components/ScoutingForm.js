import React from "react"
import QuestionPage from "./QuestionPage"
import FormContainer from "../containers/form-container"
import {Provider} from "unstated"

class ScoutingForm extends React.Component {
  constructor(props) {
    super(props)
    this.form = new FormContainer
  }

  render() {
    return <Provider inject={[this.form]}>

    </Provider>
  }
}

export default ScoutingForm
