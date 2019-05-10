import React, { useState } from "react"
import QuestionPage from "./QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import { Provider } from "unstated"
import * as _ from "lodash"
import { Form, Header } from "semantic-ui-react"
import propTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { generateValidationReport } from "../util/form-validator"

function ScoutingForm (props) {

  const formMetadata = props.match.params

  const [form, setForm] = useState({})

  const container = new ScoutingFormContainer(props.formConsumer)
  props.formPromise.then(form => {
    container.initialize(form, formMetadata)
    setForm(form)
  })

  const confirm = () => {
    const report = generateValidationReport(this.state.container.state.form)
    console.log("report is", report)
    if (!report.status) {
      alert("Please Fill The Whole Form In Order To Proceed")
    } else {
      this.state.container.submit().then(() => {
        this.props.history.push(props.fallbackURL)
      })
    }
  }

  return (
    <div className="scoutingForm segment centered">
      <Header as="h1">{props.title}</Header>
      <Provider inject={[container]}>
        <Form>
          {
            _.map(form, (questions, section) => (
              <QuestionPage
                questions={questions}
                key={section}
                title={section}
                consumer={(questionName, answer) => container.set(section, questionName, answer)}
                supplier={(questionName) => container.get(section, questionName)}/>
            ))
          }

          <Form.Button onClick={() => confirm()}>Submit</Form.Button>
        </Form>
      </Provider>
    </div>
  )
}

ScoutingForm.propTypes = {
  formPromise: propTypes.object,
  formConsumer: propTypes.func,
  title: propTypes.string,
  fallbackURL: propTypes.string
}
export default withRouter(ScoutingForm)
