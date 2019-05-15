import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"
import "./style.css"
import ScoutingFormContainer from "../../../containers/scouting-form-container"

function Number ({min, helpers, subform, name}) {

  const container = ScoutingFormContainer.useContainer()
  const saveAll = n => {
    n = n ? n : 0

    const num = n > min ? n : min
    container.set(subform, name, num)
  }

  const value = () => container.get(subform, name)

  return (
    <Button.Group fluid>
      {helpers ? <Button
        className="number-button"
        basic
        color="black"
        onClick={() => saveAll(value() - 1)}>
        {"-"}
      </Button> : ""}
      <Button basic color="black" className="input_button">{value()}</Button>
      {helpers ? <Button
        className="number-button"
        basic
        color="black"
        onClick={() => saveAll(value() + 1)}>
        {"+"}
      </Button> : ""}
    </Button.Group>
  )
}

Number.defaultProps = {
  min: 0,
  helpers: true
}

Number.propTypes = {
  min: propTypes.number,
  helpers: propTypes.bool,
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default Number
