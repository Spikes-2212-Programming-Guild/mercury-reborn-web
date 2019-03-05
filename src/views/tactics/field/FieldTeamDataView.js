import React from "react"
import { fetchFieldTeamSummary } from "../../../connectors/mercury-api-connector"
import DataDisplayPage from "../../../components/display-data/questions/DataDisplayPage"
import * as _ from "lodash"

export default class FieldTeamDataView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      summary: {},
      matches: []
    }

    const {team_id} = this.props.match.params

    fetchFieldTeamSummary(team_id).then(summary => {
      const {matches} = summary
      delete summary.matches
      this.setState({summary, matches})
    })
  }

  render () {
    return (
      <div>
        {
          _.map(this.state.summary, (questions, section) => (
            <div key={section}>
              <h3>{section}</h3>
              <DataDisplayPage matches={this.state.matches} questions={questions}/>
            </div>
          ))
        }
      </div>
    )
  }

}