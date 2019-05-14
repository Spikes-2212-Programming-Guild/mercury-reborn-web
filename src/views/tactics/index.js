import React from "react"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import { Route } from "react-router-dom"
import TacticsHomepage from "./TacticsHomepage"

export default (props) => {

  const {path} = props.match
  return (<div>
    <Route exact path={`${path}`} component={TacticsHomepage}/>
    <Route path={`${path}/pit`} component={PitRoutes}/>
    <FieldRoutes {...props}/>
    <SpectatorRoutes {...props}/>
  </div>)
}