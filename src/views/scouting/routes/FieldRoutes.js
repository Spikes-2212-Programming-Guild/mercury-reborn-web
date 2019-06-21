import { Route } from "react-router-dom"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import * as configManager from "../../../util/config-manager"
import { submitFieldForm } from "../../../connectors/mercury-api-connector"
import ScoutingForm from "../../../components/ScoutingForm"
import Match from "../../../components/scouting-menu/match/match"
import React from "react"

const FieldForm = (props) => (
  <ScoutingForm
    {...props}
    formSupplier={configManager.getFieldForm}
    formConsumer={submitFieldForm}
    title={`Scouting - ${props.match.params.team_id.replace("frc", "")}`}
    fallbackURL={"/scouting/field/matches"}
  />
)

const FieldRoutes = ({match}) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}/field/matches`}
        component={() => <MatchesMenu parentURL={`${match.path}/field`}/>}/>
      <Route
        path={`${match.path}/field/matches/:name`}
        component={() => <Match parentURL={`${match.path}/field/matches/scout/`}/>}/>
      <Route
        path={`${match.path}/field/matches/scout/:name/:team_id/`}
        component={FieldForm}/>
    </div>
  )
}

export default FieldRoutes