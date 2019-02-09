import React from "react"
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import { Label } from "semantic-ui-react"

function MatchLink (props) {
  const matchName = props.comp_level + props.number
  return (
    <div>
      <Label size={"huge"} title={props.title}><Link to={`matches/${matchName}`}>{matchName}</Link></Label>
    </div>
  )
}

MatchLink.propTypes = {
  comp_level: propTypes.string,
  number: propTypes.number
}

export default MatchLink