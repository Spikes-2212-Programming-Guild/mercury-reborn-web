import React from "react"
import propTypes from "prop-types"
import Enum from "./questions/enum"
import Boolean from "./questions/boolean"
import Number from "./questions/number/"
import Text from "./questions/text"
import { Form, Header } from "semantic-ui-react"
import { Subscribe } from "unstated"
import ScoutingFormContainer from "../containers/scouting-form-container"

const QuestionRegistry = {
  "number": (props, key, consumer, supplier) => (
    <Number {...props} consumer={consumer} supplier={supplier} key={key}/>),
  "enum": (props, key, consumer, supplier) => (
    <Enum {...props} consumer={consumer} supplier={supplier} key={key}/>),
  "text": (props, key, consumer, supplier) => (
    <Text {...props} consumer={consumer} supplier={supplier} key={key}/>),
  "boolean": (props, key, consumer, supplier) => (
    <Boolean {...props} consumer={consumer} supplier={supplier} key={key}/>)
}

function QuestionPage (props) {
  return (
    <div>
      <Header as="h3" dividing>{props.title}</Header>
      <Subscribe to={[ScoutingFormContainer]}>
        {
          () => (
            props.questions.map((question, index) => (
              <Form.Field key={index}>
                <Header as="h5">{question.name}</Header>
                {QuestionRegistry[question.type](question, index,
                  answer => props.consumer(question.name, answer),
                  () => props.supplier(question.name))}
              </Form.Field>
            ))
          )
        }
      </Subscribe>
      <br/>
    </div>
  )
}

QuestionPage.propTypes = {
  questions: propTypes.array,
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default QuestionPage
