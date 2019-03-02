import React from "react"
import { Provider } from "unstated"
import ScoutingMenuContainer from "../../containers/scouting-menu-container"
import * as tbaApi from "../../connectors/tba-api/connector"
import { Route } from "react-router-dom"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import ScoutingHomepage from "./ScoutingHomepage"

export default class ScoutingMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.container = new ScoutingMenuContainer()
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.state.container.setMatches(matches))
    tbaApi.fetchTeamsForTeamsList().then(teams => this.state.container.setTeams(teams))
  }

  render () {
    return (
      <Provider inject={[this.state.container]}>
        <Route exact path={`${this.props.match.path}/`} component={ScoutingHomepage}/>
        <SpectatorRoutes {...this.props}/>
        <PitRoutes {...this.props}/>
        <FieldRoutes {...this.props}/>
      </Provider>
    )
  }
}
