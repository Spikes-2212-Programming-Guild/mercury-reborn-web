import React from "react"
import { Provider } from "unstated"
import ScoutingMenuContainer from "../../containers/scouting-menu-container"
import * as tbaApi from "../../connectors/tba-api/connector"

import {FieldRoutes, PitRoutes, ViewerRoutes} from "./routes"

export default class ScoutingMenu extends React.Component {
  constructor (props) {
    super(props)
    this.container = new ScoutingMenuContainer()
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.container.setMatches(matches))
    tbaApi.fetchTeamsForTeamsList().then(teams => this.container.setTeams(teams))
  }

  render () {
    return (
      <Provider inject={[this.container]}>
        <ViewerRoutes {...this.props}/>
        <PitRoutes {...this.props}/>
        <FieldRoutes {...this.props}/>
      </Provider>
    )
  }
}
