import React from "react"
import QuestionPage from "../components/QuestionPage"
import ScoutingFormContainer from "../containers/scouting-form-container"
import {Provider} from "unstated"
import {fetchScoutingForm} from "../connectors/mercury-api-connector"
import * as _ from "lodash"
import {Form, Header, Container, Grid} from "semantic-ui-react"
import * as configManager from "../util/config-manager"

class ScoutingForm extends React.Component {
  constructor(props) {
    super(props)
    this.container = new ScoutingFormContainer()

    const {name, team} = this.props.match.params

    this.state = {
      form: {},
      name, teamNumber: team
    }

    configManager.getScoutingForm().then(form => {
      console.log(form)
      this.container.initialize(form, this.state.teamNumber, this.state.name)
      this.setState({form})
    })
  }

  render() {
    return (
      <div className="scoutingForm segment centered">
        <Header as="h1">{this.state.team}</Header>
        <Header dividing as="h2">Scouting</Header>
        <Provider inject={[this.container]}>
          <Form>
            {
              _.map(this.state.form, (questions, section) => (
                <QuestionPage
                  questions={questions}
                  key={section}
                  title={section}
                  consumer={(questionName, answer) => this.container.set(section, questionName, answer)}
                  supplier={(questionName) => this.container.get(section, questionName)}/>
              ))
            }

            <Form.Button onClick={() => {
              this.container.submit()
                .then(() => window.location.reload())
            }}>Submit</Form.Button>
          </Form>
        </Provider>
      </div>
    )
  }
}

export default ScoutingForm
