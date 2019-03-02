import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"

class Enum extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Button.Group>
        {this.props.options.map((option, index) => (
          <Button
            key={index}
            color={(this.props.supplier() === option) ? "red" : "grey"}
            onClick={() => {
              this.props.consumer(option)
              this.forceUpdate()
            }}>{option}</Button>
        ))}
      </Button.Group>)
  }

}

Enum.propTypes = {
  options: propTypes.array,
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default Enum
