import React from "react"
import { withRouter } from "react-router-dom"
import propTypes from "prop-types"
import { List } from "semantic-ui-react"

function TeamsList (props) {
  return (
    <List vertical selection relaxed divided size={"huge"} fluid>
      {props.teams.map((team, index) => (
        <List.Item key={index} onClick={() => props.history.push(`${props.parentURL}/${team}`)}>
          {team}
        </List.Item>
      ))}
    </List>
  )
}

TeamsList.propTypes = {
  teams: propTypes.array,
  parentURL: propTypes.string
}

export default withRouter(TeamsList)
