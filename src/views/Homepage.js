import React from "react"
import { Label, Header, List } from "semantic-ui-react"
import { Link } from "react-router-dom"
import ResetConf from "./scouting/ScoutingHomepage"

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