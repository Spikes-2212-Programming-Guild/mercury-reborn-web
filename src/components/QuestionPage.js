import React from "react"
import propTypes from "prop-types"
import Enum from "./questions/enum"
import Boolean from "./questions/boolean"
import Number from "./questions/number/"
import Text from "./questions/text"
import {Form, Header} from "semantic-ui-react"

const QuestionRegistry = {
  "number": (props, key, valueConsumer) => (<Number {...props} valueConsumer={valueConsumer} key={key}/>),
  "enum": (props, key, valueConsumer) => (<Enum {...props} valueConsumer={valueConsumer} key={key}/>),
  "text": (props, key, valueConsumer) => (<Text {...props} valueConsumer={valueConsumer} key={key}/>),
  "boolean": (props, key, valueConsumer) => (<Boolean {...props} valueConsumer={valueConsumer} key={key}/>)
}

class QuestionPage extends React.Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    questions: propTypes.array,
    consumer: propTypes.func
  }

  render () {
    return (
      <div>
        <Header as="h3" dividing>{this.props.title}</Header>
        {this.props.questions.map((question, index) => (
          <Form.Field key={index}>
            <Header as="h5">{question.name}</Header>
            {QuestionRegistry[question.type](question, index, answer => this.props.consumer(question.name, answer))}
          </Form.Field>
        ))}
      </div>
    )
  }
}

export default QuestionPage
