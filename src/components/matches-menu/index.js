import propTypes from "prop-types"
import React from "react"
import MatchLink from "./item"

function MatchList (props) {
  return props.matches.map((match, index) => <MatchLink url={props.url} {...match} id={index}/>)
}

MatchList.propTypes = {
  url: propTypes.string,
  matches: propTypes.array
}

export {
  MatchLink, MatchList
}