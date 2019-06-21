import ScoutingForm from "../../../components/ScoutingForm"
import * as configManager from "../../../util/config-manager"
import { Route } from "react-router-dom"
import React from "react"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import { submitSpectatorForm } from "../../../connectors/mercury-api-connector"
import Match from "../../../components/scouting-menu/match/match"

const SpectatorForm = (props) => (
  <ScoutingForm
    {...props}
    formConsumer={submitSpectatorForm}
    formSupplier={configManager.getSpectatorForm}
    title={`Match - ${props.match.params.match}`}
    fallbackURL={"/scouting/spectator/matches"}/>
)

const SpectatorRoutes = ({match}) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}/spectator/matches`}
        component={() => <MatchesMenu parentURL={`${match.path}/spectator`}/>}/>

      <Route
        exact
        path={`${match.path}/spectator/:match/:team_id`}
        component={SpectatorForm}/>
    </div>
  )
}

export default SpectatorRoutes