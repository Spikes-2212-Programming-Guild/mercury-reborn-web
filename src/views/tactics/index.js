import React from "react"
import { FieldRoutes, PitRoutes, SpectatorRoutes } from "./routes"

export class Tactics extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <PitRoutes {...this.props}/>
        <FieldRoutes {...this.props}/>
        <SpectatorRoutes {...this.props}/>
      </div>
    )
  }
}