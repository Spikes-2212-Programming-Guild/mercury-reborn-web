import React from "react"
import { Route } from "react-router-dom"
import TeamsContainer from "../../../containers/teams-container"
import { fetchSavedPitScoutingTeams } from "../../../connectors/mercury-api-connector"
import PitTeamsMenu from "../pit/PitTeamsMenu"
import PitScoutingDataView from "../pit/PitScoutingDataView"

export const PitRoutes = ({match}) => {

  const container = TeamsContainer.useContainer()

  fetchSavedPitScoutingTeams().then(teams => container.setTeams(teams))

  return (
    <div>
      <Route path={`${match.path}/pit`} exact component={PitTeamsMenu}/>
      <Route path={`${match.path}/pit/:team_id`} component={PitScoutingDataView}/>
    </div>
  )
}

export default (props) => (
  <TeamsContainer.Provider>
    <PitRoutes {...props}/>
  </TeamsContainer.Provider>
)