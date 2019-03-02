import React from "react"

import {Link} from "react-router-dom"
import {Label, List} from "semantic-ui-react"

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <List>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/matches-field"}>Scout Field</Link></Label>
          </List.Item>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/form-viewer"}>Scout Viewer</Link></Label>
          </List.Item>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/teams-pit"}>Scout Pits</Link></Label>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default Homepage
