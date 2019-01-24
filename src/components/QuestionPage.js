import React from "react"
import propTypes from "prop-types"
import Enum from "./questions/enum"
import Boolean from "./questions/boolean"
import Number from "./questions/number/"
import Text from "./questions/text"
import {Form, Label} from "semantic-ui-react"


const QuestionRegistry = {
  "number": (props, key) => (<Number {...props} key={key}/>),
  "enum": (props, key) => (<Enum {...props} key={key}/>),
  "text": (props, key) => (<Text {...props} key={key}/>),
  "boolean": (props, key) => (<Boolean {...props} key={key}/>)
}

class QuestionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.questions,
      set: this.props.set
    }
  }

  static propTypes = {
    questions: propTypes.array,
    set: propTypes.func
  }

  render() {
    return (<div>
      <Form>
        {this.state.questions.map((question, index) => (<div><Label>{question.name}</Label><div>{QuestionRegistry[question.type](question, index, answer => this.set(answer))}</div></div>))}
      </Form>
    </div>)
  }
}

export default QuestionPage
