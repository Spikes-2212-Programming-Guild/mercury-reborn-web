import React from "react"
import { Provider } from "unstated"
import * as tbaApi from "../../connectors/tba-api/connector"
import { Route } from "react-router-dom"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import ScoutingHomepage from "./ScoutingHomepage"
import MatchesContainer from "../../containers/matches-container"
import TeamsContainer from "../../containers/teams-container"

export default class Scouting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      matchesContainer: new MatchesContainer(),
      teamsContainer: new TeamsContainer()
    }
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.state.matchesContainer.setMatches(matches))
    tbaApi.fetchTeamsForTeamsList().then(teams => this.state.teamsContainer.setTeams(teams))

  }

  render () {
    return (
      <Provider inject={[this.state.matchesContainer, this.state.teamsContainer]}>
        <Route exact path={`${this.props.match.path}/`} component={ScoutingHomepage}/>
        <SpectatorRoutes {...this.props}/>
        <PitRoutes {...this.props}/>
        <FieldRoutes {...this.props}/>
      </Provider>
    )
  }
}
