import React from "react"

import { Link } from "react-router-dom"
import { Label, List } from "semantic-ui-react"

class ScoutingHomepage extends React.Component {
  render() {
    return (
      <div>
        <h3>Choose Your Scouting...</h3>
        <List>
          <List.Item>
            <Label basic size={"big"} horizontal><Link to={"/scouting/field/matches"} className="scouting">Scout Field</Link></Label>
          </List.Item>
          <List.Item>
            <Label basic size={"big"} horizontal><Link to={"/scouting/spectator/matches/"}>Scout Spectator</Link></Label>
          </List.Item>
          <List.Item>
            <Label basic size={"big"} horizontal><Link to={"/scouting/pit/teams"}>Scout Pits</Link></Label>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default ScoutingHomepage
