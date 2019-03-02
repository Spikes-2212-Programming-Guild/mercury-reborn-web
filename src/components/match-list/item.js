import React from "react"
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import { Label } from "semantic-ui-react"

function MatchLink (props) {
  const {name} = props
  return (
    <div>
      <Label color="red" size={"huge"} title={props.title}><Link to={`matches-field/${name}`}>{name}</Link></Label>
    </div>
  )
}

MatchLink.propTypes = {
  name: propTypes.string,
}

export default MatchLink
