import React, { useEffect } from "react"
import * as tbaApi from "../../connectors/tba-api/connector"
import { Route } from "react-router-dom"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import ScoutingHomepage from "./ScoutingHomepage"
import MatchesContainer from "../../containers/matches-container"
import TeamsContainer from "../../containers/teams-container"

const Scouting = (props) => {

  const matchesContainer = MatchesContainer.useContainer()
  const teamsContainer = TeamsContainer.useContainer()

  useEffect(() => {
    tbaApi.fetchMatchesForScoutingMenu()
      .then(matches => {
        console.log("matches are", matches)
        matchesContainer.setMatches(matches)
      })
  },
  [])
  useEffect(() => {
    tbaApi.fetchTeamsForTeamsList()
      .then(teams => teamsContainer.setTeams(teams))
  }, [])
  return (
    <div>
      <Route exact path={`${props.match.path}/`} component={ScoutingHomepage}/>
      <SpectatorRoutes {...props}/>
      <PitRoutes {...props}/>
      <FieldRoutes {...props}/>
    </div>
  )
}

export default (props) => (
  <MatchesContainer.Provider>
    <TeamsContainer.Provider>
      <Scouting {...props}/>
    </TeamsContainer.Provider>
  </MatchesContainer.Provider>
)

