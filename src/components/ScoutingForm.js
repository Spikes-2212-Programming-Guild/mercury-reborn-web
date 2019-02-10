import React from "react"
import QuestionPage from "./QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import {Provider} from "unstated"
import {fetchScoutingForm} from "../connectors/mercury-api-connector";

class ScoutingForm extends React.Component {
  constructor(props) {
    super(props)
    this.container = new ScoutingFormContainer()

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
      <Subscriber>
        {Object.keys(fetchScoutingForm()).map(section => <QuestionPage questions={section.questions}
          set={(answer, question) => this.container.set(section.name, question.name, answer)}/>)}
      </Subscriber>
    </Provider>
  }
}

export default ScoutingForm
