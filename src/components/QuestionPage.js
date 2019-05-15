import React from "react"
import propTypes from "prop-types"
import Enum from "./questions/enum"
import Boolean from "./questions/boolean"
import Number from "./questions/number/"
import Text from "./questions/text"
import { Form, Header } from "semantic-ui-react"

const QuestionRegistry = {
  "number": (props, key, subform) => (
    <Number {...props} subform={subform} key={key}/>),
  "enum": (props, key, subform) => (
    <Enum {...props}  key={key} subform={subform}/>),
  "text": (props, key, subform) => (
    <Text {...props} key={key} subform={subform}/>),
  "boolean": (props, key, subform) => (
    <Boolean {...props} key={key} subform={subform}/>)
}

const QuestionPage = ({questions, title}) => (
  <div>
    <Header as="h3" dividing>{title}</Header>
    {
      questions.map((question, index) => (
        <Form.Field key={index}>
          <Header as="h5">{question.name}</Header>
          {QuestionRegistry[question.type](question, index, title)}
        </Form.Field>
      ))
    }
    <br/>
  </div>
)

QuestionPage.propTypes = {
  title: propTypes.string,
  questions: propTypes.array,
}

export default QuestionPage
