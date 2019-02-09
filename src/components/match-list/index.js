import propTypes from "prop-types"
import React from "react"
import MatchLink from "./item"

function MatchList (props) {
  return props.matches.map((match, index) => <MatchLink {...match} id={index}/>)
}

MatchList.propTypes = {
  matches: propTypes.array
}

export {
  MatchLink, MatchList
}