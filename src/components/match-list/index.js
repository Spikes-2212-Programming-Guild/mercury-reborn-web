import propTypes from "prop-types"
import React from "react"
import MatchLink from "./item"
import { List } from "semantic-ui-react"

function MatchList (props) {
  return (
    <List vertical selection relaxed divided size={"huge"} fluid>
      {props.matches.map((match, index) => (
        <List.Item key={index}>
          <MatchLink {...match} parentURL={props.parentURL}/>
        </List.Item>
      ))}
    </List>
  )
}

MatchList.propTypes = {
  matches: propTypes.array,
  parentURL: propTypes.string
}

export {
  MatchLink, MatchList
}
