import React from "react"
import propTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { List } from "semantic-ui-react"

function MatchLink (props) {
  const {name} = props

  const redirect = () => {
    props.history.push(`${props.parentURL}/matches/${name}`)
  }

  return (

    <div onClick={redirect}>
      <List.Content color="red" size={"huge"} title={props.title}>{name}</List.Content>
    </div>
  )
}

MatchLink.propTypes = {
  name: propTypes.string,
}

export default withRouter(MatchLink)
