import React from "react"
import {withRouter} from "react-router-dom"
import propTypes from "prop-types"
import {List} from "semantic-ui-react"
import * as _ from "lodash"

function TeamsList(props) {
  return (
    <List vertical selection relaxed divided size={"huge"} fluid>
      {props.teams.map((team, index) => <List.Item key={index}>
        {team}
      </List.Item>)}
    </List>
  )
}

TeamsList.propTypes = {
  teams: propTypes.array,
  parentURL: propTypes.string
}


export default withRouter(TeamsList)