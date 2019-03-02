import React from "react"

import {Link} from "react-router-dom"
import {Label, List} from "semantic-ui-react"
import ResetConf from "./ResetConf"

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <List>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/field/matches"}>Scout Field</Link></Label>
          </List.Item>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/viewer/matches/"}>Scout Viewer</Link></Label>
          </List.Item>
          <List.Item>
            <Label size={"massive"} horizontal><Link to={"/scouting-form/pit/teams"}>Scout Pits</Link></Label>
          </List.Item>
        </List>
        <ResetConf />
      </div>
    )
  }
}

export default Homepage
