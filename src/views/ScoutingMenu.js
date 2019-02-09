import React from "react"

import {fetchMatchesForScoutingMenu} from "../connectors/tba-api/connector"
import {Label} from "semantic-ui-react"
import {Switch} from "react-router-dom"

function MatchItem(props) {
  return <Label title={props.title}></Label>
}

function ScoutingMenu(props) {
  return (
    <div>

    </div>
  )
}

export default ScoutingMenu