import React from "react"
import { Label, List } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function TacticsHomepage (props) {
  console.log(props.match)
  return <List>
    <List.Item>
      <Label basic size={"big"} horizontal><Link to={`${props.match.path}/field`} className="scouting">Info For Field</Link></Label>
    </List.Item>
    <List.Item>
      <Label basic size={"big"} horizontal><Link to={`${props.match.path}/spectator`}>Info For Spectator</Link></Label>
    </List.Item>
    <List.Item>
      <Label basic size={"big"} horizontal><Link to={`${props.match.path}/pit`}>Info For Pit</Link></Label>
    </List.Item>
  </List>
}