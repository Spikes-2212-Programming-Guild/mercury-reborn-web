import { Subscribe } from "unstated"
import ScoutingMenuContainer from "../../containers/scouting-menu-container"
import { MatchList } from "../match-list"
import React from "react"

export default function MatchesMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        console.log("matches")
        return <MatchList {...props} matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}