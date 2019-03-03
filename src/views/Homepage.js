import React from "react"
import { Label, Header, List } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Homepage (props) {
  return (
    <div>
      <Header as={"h1"}>Mercury</Header>
      <List>
        <List.Item>
          <Label basic size={"massive"} horizontal><Link to={"/scouting"} className="scouting">Scouting</Link></Label>
        </List.Item>
        <List.Item>
          <Label basic size={"massive"} horizontal><Link to={"/tactics"}>Tactics</Link></Label>
        </List.Item>
      </List>
    </div>
  )
}