import { Route } from "react-router-dom"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import * as configManager from "../../../util/config-manager"
import { submitFieldForm } from "../../../connectors/mercury-api-connector"
import ScoutingForm from "../../../components/ScoutingForm"
import Match from "../../../components/scouting-menu/match/match"
import React from "react"

export default function fieldRoutes (props) {
  return (
    <div>
      <Route
        exact
        path={`${props.match.path}/field/matches`}
        component={() => <MatchesMenu parentURL={`${this.props.match.path}/field`}/>}/>
      <Route
        path={`${props.match.path}/field/matches/:name`}
        component={() => <Match parentURL={`${this.props.match.path}/field/matches/scout/`}/>}/>
      <Route
        path={`${props.match.path}/field/matches/scout/:name/:team/`}
        component={(props) => (
          <ScoutingForm
            {...props}
            formPromise={configManager.getFieldForm()}
            formConsumer={submitFieldForm}
            title={`Scouting - ${props.match.params.team.replace("frc", "")}`}/>
        )}/>
    </div>
  )
}