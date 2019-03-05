import React from "react"
import QuestionPage from "./QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import { Provider } from "unstated"
import * as _ from "lodash"
import { Form, Header } from "semantic-ui-react"
import propTypes from "prop-types"
import { withRouter } from "react-router-dom"

class ScoutingForm extends React.Component {

  static propTypes = {
    formPromise: propTypes.object,
    formConsumer: propTypes.func,
    title: propTypes.string,
    fallbackURL: propTypes.string
  }

  constructor (props) {
    super(props)
    const formParams = this.props.match.params

    this.state = {
      form: {},
      container: new ScoutingFormContainer(this.props.formConsumer)
    }

    props.formPromise.then(form => {
      console.log(form)
      this.state.container.initialize(form, formParams)
      this.setState({form})
    })
  }

  async reload () {
    const formParams = this.props.match.params

    const form = await this.props.formPromise
    await this.state.container.initialize(form, formParams)
    return await this.setState({form})
  }

  render () {
    return (
      <div className="scoutingForm segment centered">
        <Header as="h1">{this.state.team}</Header>
        <Header dividing as="h2">{this.props.title}</Header>
        <Provider inject={[this.state.container]}>
          <Form>
            {
              _.map(this.state.form, (questions, section) => (
                <QuestionPage
                  questions={questions}
                  key={section}
                  title={section}
                  consumer={(questionName, answer) => this.state.container.set(section, questionName, answer)}
                  supplier={(questionName) => this.state.container.get(section, questionName)}/>
              ))
            }

            <Form.Button onClick={() => {
              this.state.container.submit()
                .then(() => {
                  console.log()
                  console.log(this.props)
                  this.props.history.push(this.props.fallbackURL)

                })
            }}>Submit</Form.Button>
          </Form>
        </Provider>
      </div>
    )
  }
}

export default withRouter(ScoutingForm)