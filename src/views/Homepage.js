import React from "react"
import { Label, List } from "semantic-ui-react"
import { Link } from "react-router-dom"
import ResetConf from "./ResetConf"

export default function Homepage (props) {
  return (
    <div>
      <List>
        <List.Item>
          <Label basic size={"big"} horizontal><Link to={"/scouting"} className="scouting">Scouting</Link></Label>
        </List.Item>
        <List.Item>
          <Label basic size={"big"} horizontal><Link to={"/tactics"}>Tactics</Link></Label>
        </List.Item>
      </List>
      <ResetConf />
    </div>
  )
}