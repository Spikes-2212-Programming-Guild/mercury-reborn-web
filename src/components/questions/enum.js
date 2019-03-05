import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"

class Enum extends React.Component {
  constructor (props) {
    super(props)
  }

  static defaultProps = {
    color: "black"
  }

  render () {
    return (
      <Button.Group fluid>
        {this.props.options.map((option, index) => (
          <Button
            basic={this.props.supplier() === option ? false : true}
            key={index}
            color={(this.props.supplier() === option) ? this.props.color : "black"}
            onClick={() => {
              this.props.consumer(option)
              this.forceUpdate()
            }}>
            {option}
          </Button>
        ))}
      </Button.Group>
    )
  }

}

Enum.propTypes = {
  options: propTypes.array,
  consumer: propTypes.func,
  supplier: propTypes.func
}

export default Enum
