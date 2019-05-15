import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"
import ScoutingFormContainer from "../../containers/scouting-form-container"


function Enum ({color, options, subform, name}) {

  const container = ScoutingFormContainer.useContainer()

  const get = () => container.get(subform, name)
  const set = (val) => container.set(subform, name, val)

  return (
    <Button.Group fluid>
      {options.map((option, index) => (
        <Button
          basic={get() !== option}
          key={index}
          color={(get() === option) ? color : "black"}
          onClick={() => {
            set(option)
          }}>
          {option}
        </Button>
      ))}
    </Button.Group>
  )
}

Enum.propTypes = {
  options: propTypes.array,
  subform: propTypes.string,
  name: propTypes.string
}

Enum.defaultProps = {
  color: "black"
}

export default Enum
