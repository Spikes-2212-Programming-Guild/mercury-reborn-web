import React from "react"
import { TextArea } from "semantic-ui-react"
import propTypes from "prop-types"

function Text(props){

  const {consumer, supplier} = props

  return (
    <TextArea onChange={consumer}>{supplier()}</TextArea>
  )
}

Text.propTypes = {
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default Text
