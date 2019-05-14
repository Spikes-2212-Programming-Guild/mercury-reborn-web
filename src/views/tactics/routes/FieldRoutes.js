import React, {useEffect} from "react"
import { Route } from "react-router-dom"
import FieldHomepage from "../field/FieldHomepage"
import FieldMatchesMenu from "../field/FieldMatchesMenu"
import MatchesContainer from "../../../containers/matches-container"
import { fetchSavedFieldMatches, fetchSavedFieldTeams } from "../../../connectors/mercury-api-connector"
import Match from "../../../components/scouting-menu/match/match"
import { fetchMatchesForScoutingMenu } from "../../../connectors/tba-api/connector"
import FieldMatchDataView from "../field/FieldMatchDataView"
import TeamsContainer from "../../../containers/teams-container"
import FieldTeamsMenu from "../field/FieldTeamsMenu"
import FieldTeamDataView from "../field/FieldTeamDataView"

const FieldRoutes = ({match}) => {
  const matchesContainer = MatchesContainer.useContainer()
  const teamsContainer = TeamsContainer.useContainer()

  useEffect(() => {fetchSavedFieldMatches().then(matchNames =>
    fetchMatchesForScoutingMenu(matchNames).then(matches => matchesContainer.setMatches(matches)))}, [])

  useEffect(() => {fetchSavedFieldTeams().then(teams => teamsContainer.setTeams(teams))}, [])

  return (
    <div>
      <Route path={`${match.path}/field`} exact component={FieldHomepage}/>
      <Route path={`${match.path}/field/match`} exact component={FieldMatchesMenu}/>
      <Route
        path={`${match.path}/field/match/matches/:name`}
        component={() => <Match parentURL={`${match.path}/field/match/view/`}/>}/>
      <Route
        path={`${match.path}/field/match/view/:match_name/:team_id`}
        component={FieldMatchDataView}/>
      <Route path={`${match.path}/field/teams`} exact component={FieldTeamsMenu}/>
      <Route path={`${match.path}/field/teams/:team_id`} component={FieldTeamDataView}/>
    </div>
  )
}

export default (props) => (
  <MatchesContainer.Provider>
    <TeamsContainer.Provider>
      <FieldRoutes {...props}/>
    </TeamsContainer.Provider>
  </MatchesContainer.Provider>
)