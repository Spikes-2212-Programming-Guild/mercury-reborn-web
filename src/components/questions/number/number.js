import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"
import "./style.css"

function Number (props) {

  const {min, supplier, helpers, consumer} = props

  const saveAll = n => {
    n = n ? n : 0
    const num = n > min ? n : min
    consumer(num)
  }

  return (
    <Button.Group fluid>
      {helpers ? <Button
        className="number-button"
        basic
        color="black"
        onClick={() => saveAll(supplier() - 1)}>
        {"-"}
      </Button> : ""}
      <Button basic color="black" className="input_button">{props.supplier()}</Button>
      {helpers ? <Button
        className="number-button"
        basic
        color="black"
        onClick={() => saveAll(supplier() + 1)}>
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
