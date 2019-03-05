import React from "react"

import { Label, List } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function FieldHomepage (props) {
  return (
    <div>
      <List>
        <List.Item>
          <Label basic size={"massive"} horizontal><Link to={`${props.match.path}/match`}>By Match</Link></Label>
        </List.Item>
        <List.Item>
          <Label basic size={"massive"} horizontal><Link to={`${props.match.path}/teams`}>By Team</Link></Label>
        </List.Item>
      </List>
    </div>
  )
}