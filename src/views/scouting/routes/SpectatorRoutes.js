import ScoutingForm from "../../../components/ScoutingForm"
import * as configManager from "../../../util/config-manager"
import { Route } from "react-router-dom"
import React from "react"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import { submitSpectatorForm } from "../../../connectors/mercury-api-connector"

export default function SpectatorRoutes (props) {
  return (
    <div>
      <Route
        exact
        path={`${props.match.path}/spectator/matches/:match`}
        component={props => (
          <ScoutingForm
            {...props}
            formConsumer={submitSpectatorForm}
            formPromise={configManager.getSpectatorForm()}
            title={`Match - ${props.match.params.match}`}
            fallbackURL={"/scouting/spectator/matches"}/>
        )}/>

      <Route
        exact
        path={`${props.match.path}/spectator/matches`}
        component={() => <MatchesMenu parentURL={`${props.match.path}/spectator`}/>}/>
    </div>
  )
}
