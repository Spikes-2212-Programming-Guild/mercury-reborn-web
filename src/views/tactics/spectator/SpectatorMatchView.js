import React from "react"
import { fetchSpectatorMatch } from "../../../connectors/mercury-api-connector"
import FormTable from "../../../components/display-data/FormTable"

export default class SpectatorMatchView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      match: null
    }

    const {match_name} = props.match.params
    console.log(props.match)
    fetchSpectatorMatch(match_name).then(match => this.setState({match}))
  }

  render() {

    if (this.state.match) {
      const {match_name} = this.props.match.params

      return (
        <div>
          <h3>{`Spectator Scouting For ${match_name}`}</h3>
          <FormTable data={this.state.match}/>
        </div>
      )
    }
    return ""
  }

}