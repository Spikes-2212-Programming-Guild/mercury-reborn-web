import { Subscribe } from "unstated"
import { MatchList } from "../match-list"
import React from "react"
import MatchesContainer from "../../containers/matches-container"

export default function MatchesMenu (props) {
  return (
    <Subscribe to={[MatchesContainer]}>
      {container => {
        console.log(container.state)
        return <MatchList {...props} matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}