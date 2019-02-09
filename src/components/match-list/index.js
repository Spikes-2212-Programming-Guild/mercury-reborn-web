import propTypes from "prop-types"
import React from "react"
import MatchLink from "./item"
import {List} from "semantic-ui-react"

function MatchList (props) {
  return (
    <List vertical compact borderless fluid>
      {props.matches.map((match, index) => (
        <List.Item>
          <MatchLink {...match} id={index}/>
        </List.Item>
      ))}
    </List>
  )
}

MatchList.propTypes = {
  matches: propTypes.array
}

export {
  MatchLink, MatchList
}