import React from "react"
import TeamsMenu from "../../../components/scouting-menu/TeamsMenu"

export default function FieldTeamsMenu (props) {
  return (
    <div>
      <h3>Select A Team</h3>
      <TeamsMenu {...props} parentURL={props.match.path}/>
    </div>
  )
}