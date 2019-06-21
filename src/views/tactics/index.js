import React from "react"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import { Route } from "react-router-dom"
import TacticsHomepage from "./TacticsHomepage"

export default (props) => {

  const {path} = props.match
  return (
    <div>
      <Route exact path={`${path}`} component={TacticsHomepage}/>
      <PitRoutes {...props}/>
      <FieldRoutes {...props}/>
      <SpectatorRoutes {...props}/>
    </div>
  )
}