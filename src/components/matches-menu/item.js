import React from "react"
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import { Label } from "semantic-ui-react"

function MatchLink (props) {
  const matchName = props.comp_level + props.number
  return <Label title={props.title}><Link to={`${props.url}/${matchName}`}>{matchName}</Link></Label>
}

MatchLink.propTypes = {
  url: propTypes.string,
  comp_level: propTypes.string,
  number: propTypes.number
}

export default MatchLink