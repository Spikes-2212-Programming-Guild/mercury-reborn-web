import { Route } from "react-router-dom"
import TeamsMenu from "../../../components/scouting-menu/TeamsMenu"
import * as configManager from "../../../util/config-manager"
import React from "react"
import ScoutingForm from "../../../components/ScoutingForm"

export default function PitRoutes (props) {
  return (
    <div>
      <Route exact path={`${props.match.path}/pit/teams`} component={(props) => <TeamsMenu {...props}/>}/>
      <Route
        exact
        path={`${props.match.path}/pit/:team`}
        component={(props) => (
          <ScoutingForm
            {...props}
            formPromise={configManager.getPitForm()}
            title={`Pit - ${props.match.params.team}`}/>
        )}/>
    </div>
  )
}