import { MatchList } from "../match-list"
import React from "react"
import MatchesContainer from "../../containers/matches-container"

export default function MatchesMenu (props) {
  const container = MatchesContainer.useContainer()
  return <MatchList {...props} matches={container.matches}/>
}