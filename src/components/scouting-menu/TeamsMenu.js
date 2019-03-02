import { Subscribe } from "unstated"
import ScoutingMenuContainer from "../../containers/scouting-menu-container"
import TeamsList from "../teams-list"
import React from "react"

export default function TeamsMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        return <TeamsList {...props} teams={container.state.teams}/>
      }}
    </Subscribe>
  )
}