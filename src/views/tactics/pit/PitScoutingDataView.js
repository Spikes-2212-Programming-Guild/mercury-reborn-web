import React from "react"
import { fetchPitScouting } from "../../../connectors/mercury-api-connector"
import { Header } from "semantic-ui-react"
import FormTable from "../../../components/display-data/FormTable"

export default class PitScoutingDataView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pitForm: null
    }
    const {team_id} = props.match.params
    fetchPitScouting(team_id).then(pitForm => this.setState({pitForm}))
  }

  render() {
    if (this.state.pitForm) {
      const {team_id} = this.props.match.params
      return (
        <div>
          <Header as={"h3"}>{`Pit Scouting For Team ${team_id}`}</Header>
          <FormTable data={this.state.pitForm}/>
        </div>
      )
    }
    return ""
  }
}