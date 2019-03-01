import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"

function Enum (props) {
  return (
    <Button.Group>
      {props.options.map(option => (
        <Button active={props.supplier() === option} onClick={() => props.consumer(option)}>{option}</Button>
      ))}
    </Button.Group>)
}

Enum.propTypes = {
  options: propTypes.array,
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default Enum
