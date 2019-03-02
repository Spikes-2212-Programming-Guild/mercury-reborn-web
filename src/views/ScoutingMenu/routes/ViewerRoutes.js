import ScoutingForm from "../../../components/ScoutingForm"
import * as configManager from "../../../util/config-manager"
import { Route } from "react-router-dom"
import React from "react"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"

export default function ViewerRoutes (props) {
  return (
    <div>
      <Route
        exact
        path={`${props.match.path}/viewer/matches/:match`}
        component={props => (
          <ScoutingForm
            {...props}
            formPromise={configManager.getViewerForm()}
            title={`Match - ${props.match.params.match}`}/>
        )}/>

      <Route
        exact
        path={`${this.props.match.path}/viewer/matches`}
        component={() => <MatchesMenu parentURL={`${this.props.match.path}/viewer`}/>}/>
    </div>
  )
}