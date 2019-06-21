import React from "react"
import { fetchSavedSpectatorMatches } from "../../../connectors/mercury-api-connector"
import {useContainer} from "unstated-next"
import { Route } from "react-router-dom"
import MatchesContainer from "../../../containers/matches-container"
import SpectatorMatchesMenu from "../spectator/SpectatorMatchesMenu"
import SpectatorMatchView from "../spectator/SpectatorMatchView"


const SpectatorRoutes = ({match}) => {

  const container = MatchesContainer.useContainer()

  fetchSavedSpectatorMatches().then(matches => container.setMatches(
    matches.map(match => {return {name: match}})
  ))

  return (
    <div>
      <Route path={`${match.path}/spectator`} exact component={SpectatorMatchesMenu}/>
      <Route path={`${match.path}/spectator/matches/:match_name`} exact component={SpectatorMatchView}/>
    </div>
  )


}

export default (props) => (
  <MatchesContainer.Provider>
    <SpectatorRoutes {...props}/>
  </MatchesContainer.Provider>
)