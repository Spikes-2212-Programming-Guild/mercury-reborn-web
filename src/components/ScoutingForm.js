import React, { useState, useEffect } from "react"
import QuestionPage from "./QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import * as _ from "lodash"
import { Form, Header } from "semantic-ui-react"
import propTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { generateValidationReport } from "../util/form-validator"

const ScoutingForm = ({match, formConsumer, formSupplier, fallbackURL, title, history}) => {

  const container = ScoutingFormContainer.useContainer()
  const formMetadata = match.params

  const [formConfig, setFormConfig] = useState({})

  useEffect(() => {
    formSupplier().then(formConfig => {
      container.initialize(formConfig)
      setFormConfig(formConfig)
    })
  }, [])

  const confirm = () => {
    const report = generateValidationReport(container.form)
    if (!report.status) {
      alert("Please Fill The Whole Form In Order To Proceed")
    } else {
      const result = {...formMetadata, ...container.packValues()}
      formConsumer(result).then(() => {
        history.push(fallbackURL)
      })
    }
  }

  return (
    <div className="scoutingForm segment centered">
      <Header as="h1">{title}</Header>
      <Form>
        {
          _.map(formConfig, (questions, subform) => (
            <QuestionPage
              questions={questions}
              key={subform}
              title={subform}
              consumer={(question, answer) => container.set(subform, question, answer)}
              supplier={(question) => container.get(subform, question)}/>
          ))
        }

        <Form.Button onClick={() => confirm()}>Submit</Form.Button>
      </Form>
    </div>
  )
}

ScoutingForm.propTypes = {
  formSupplier: propTypes.func,
  formConsumer: propTypes.func,
  title: propTypes.string,
  fallbackURL: propTypes.string
}
export default withRouter((props) => (
  <ScoutingFormContainer.Provider>
    <ScoutingForm {...props}/>
  </ScoutingFormContainer.Provider>
))
