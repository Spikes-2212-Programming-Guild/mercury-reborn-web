import React from "react"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"
import { Route } from "react-router-dom"
import TacticsHomepage from "./TacticsHomepage"

export default class Tactics extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Route exact path={`${this.props.match.path}`} component={TacticsHomepage}/>
        <PitRoutes {...this.props}/>
        <FieldRoutes {...this.props}/>
        <SpectatorRoutes {...this.props}/>
      </div>
    )
  }
}