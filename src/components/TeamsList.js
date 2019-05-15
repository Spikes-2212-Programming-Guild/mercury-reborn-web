import React from "react"
import { withRouter } from "react-router-dom"
import propTypes from "prop-types"
import { List } from "semantic-ui-react"

function TeamsList ({history, teams, parentURL}) {
  return (
    <List vertical selection relaxed divided size={"huge"} fluid>
      {teams.map((team, index) => (
        <List.Item key={index} onClick={() => history.push(`${parentURL}/${team}`)}>
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
