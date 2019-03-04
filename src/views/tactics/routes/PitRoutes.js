import React from "react"
import { Route } from "react-router-dom"
import TeamsContainer from "../../../containers/teams-container"
import { fetchSavedPitScoutingTeams } from "../../../connectors/mercury-api-connector"
import { Provider } from "unstated"
import PitTeamsMenu from "../pit/PitTeamsMenu"

export class PitRoutes extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      teamsContainer: new TeamsContainer()
    }

    fetchSavedPitScoutingTeams().then(teams => this.state.teamsContainer.setTeams(teams))
  }

  render () {
    return (
      <Provider inject={[this.state.teamsContainer]}>
        <Route path={`${this.props.match.path}/pit`} exact component={PitTeamsMenu}/>
      </Provider>
    )
  }

}