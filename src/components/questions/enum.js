import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"

function Enum (props) {

  const {options, supplier, consumer, color} = props

  return (
    <Button.Group fluid>
      {options.map((option, index) => (
        <Button
          basic={supplier() !== option}
          key={index}
          color={(supplier() === option) ? color : "black"}
          onClick={() => {
            consumer(option)
          }}>
          {option}
        </Button>
      ))}
    </Button.Group>
  )
}

Enum.propTypes = {
  options: propTypes.array,
  consumer: propTypes.func,
  supplier: propTypes.func
}

Enum.defaultProps = {
  color: "black"
}

export default Enum
