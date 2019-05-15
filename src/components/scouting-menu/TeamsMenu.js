import TeamsList from "../TeamsList"
import React from "react"
import TeamsContainer from "../../containers/teams-container"

export default function TeamsMenu (props) {
  const container = TeamsContainer.useContainer()
  return <TeamsList {...props} teams={container.teams}/>

}