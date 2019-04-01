import React from "react"
import { Label, List } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"

function TacticsHomepage (props) {
  console.log(props.match)
  return <List>
    <List.Item>
      <Label basic size={"big"} horizontal onClick={() => {
        props.history.push(`${props.match.path}/field`)
      }
      }>Info For
        Field</Label>
    </List.Item>
    <List.Item>
      <Label basic size={"big"} horizontal onClick={() => {
        const pass = window.prompt("Enter Password")

        if (pass === "2213") {
          props.history.push(`${props.match.path}/pit`)
        } else {
          alert("Incorrect Password")
        }
      }}>Info For Spectator</Label>
    </List.Item>
    <List.Item>
      <Label basic size={"big"} horizontal onClick={() => {
        const pass = window.prompt("Enter Password")

        if (pass === "2213") {
          props.history.push(`${props.match.path}/pit`)
        } else {
          alert("Incorrect Password")
        }

      }}>Info For Pit</Label>
    </List.Item>
  </List>
}

export default withRouter(TacticsHomepage)