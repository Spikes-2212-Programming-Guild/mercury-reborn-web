import { Subscribe } from "unstated"
import TeamsList from "../TeamsList"
import React from "react"
import TeamsContainer from "../../containers/teams-container"

export default function TeamsMenu (props) {
  return (
    <Subscribe to={[TeamsContainer]}>
      {container => {
        return <TeamsList {...props} teams={container.state.teams}/>
      }}
    </Subscribe>
  )
}