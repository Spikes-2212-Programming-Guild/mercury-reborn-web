import React from "react"
import { fetchFieldTeamSummary } from "../../../connectors/mercury-api-connector"

export default class FieldTeamDataView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      summary: ""
    }

    const {team_id} = this.props.match.params

    fetchFieldTeamSummary(team_id).then(summary => this.setState({summary}))
  }

  render() {
    return <div>
      {JSON.stringify(this.state.summary)}
    </div>
  }

}