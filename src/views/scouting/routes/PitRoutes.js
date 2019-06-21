import { Route } from "react-router-dom"
import TeamsMenu from "../../../components/scouting-menu/TeamsMenu"
import * as configManager from "../../../util/config-manager"
import React from "react"
import ScoutingForm from "../../../components/ScoutingForm"
import { submitPitForm } from "../../../connectors/mercury-api-connector"

const PitForm = (props) => {

  const team_number = props.match.params.team.replace("frc", "")

  return (
    <ScoutingForm
      {...props}
      formSupplier={configManager.getPitForm}
      formConsumer={submitPitForm}
      title={`Pit Scouting For Team - ${team_number}`}
      fallbackURL={"/scouting/pit/teams"}
    />
  )
}
const PitRoutes = ({match}) => {
  console.log("path to pit is", match.path)
  return (
    <div>
      <Route
        exact
        path={`${match.path}/pit/teams`}
        component={(props) => <TeamsMenu {...props} parentURL={`${match.path}/pit/teams`}/>}/>
      <Route
        exact
        path={`${match.path}/pit/teams/:team`}
        component={PitForm}/>
    </div>
  )
}

export default PitRoutes