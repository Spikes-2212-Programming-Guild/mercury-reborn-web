import React from "react"
import QuestionPage from "./QuestionPage"
import FormContainer from "../containers/form-container"
import {Provider} from "unstated"
import {fetchScoutingForm} from "../connectors/mercury-api-connector";

class ScoutingForm extends React.Component {
  constructor(props) {
    super(props)
    this.container = new FormContainer()

    this.state = {
      form: {}
    }

    fetchScoutingForm().then(form => {
      this.container.initialize(form)
      this.setState({form})
    })
  }

  render() {
    return <Provider inject={[this.container]}>
      {Object.keys(fetchScoutingForm()).map(section => <QuestionPage questions={section.questions} set={(answer, question) => this.container.set(section.name, question.name, answer)} />)}
    </Provider>
  }
}

export default ScoutingForm
