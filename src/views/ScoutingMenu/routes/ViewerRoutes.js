import ScoutingForm from "../../../components/ScoutingForm"
import * as configManager from "../../../util/config-manager"
import { Route } from "react-router-dom"
import React from "react"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import {submitViewerForm} from "../../../connectors/mercury-api-connector"

export default function ViewerRoutes (props) {
  return (
    <div>
      <Route
        exact
        path={`${props.match.path}/viewer/matches/:match`}
        component={props => (
          <ScoutingForm
            {...props}
            formConsumer={submitViewerForm}
            formPromise={configManager.getViewerForm()}
            title={`Match - ${props.match.params.match}`}/>
        )}/>

      <Route
        exact
        path={`${props.match.path}/viewer/matches`}
        component={() => <MatchesMenu parentURL={`${this.props.match.path}/viewer`}/>}/>
    </div>
  )
}