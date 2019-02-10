import React from "react"
import QuestionPage from "./QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import {Provider} from "unstated"
import {fetchScoutingForm} from "../connectors/mercury-api-connector"
import * as _ from "lodash"

class ScoutingForm extends React.Component {
  constructor(props) {
    super(props)
    this.container = new ScoutingFormContainer()

    this.state = {
      form: {}
    }

    fetchScoutingForm().then(form => {
      console.log(form)
      this.container.initialize(form)
      this.setState({form})
    })
  }

  render() {
    return (
      <Provider inject={[this.container]}>
        {
          _.map(this.state.form, question => <QuestionPage questions={question}/>)
        }
      </Provider>
    )
  }
}

export default ScoutingForm
