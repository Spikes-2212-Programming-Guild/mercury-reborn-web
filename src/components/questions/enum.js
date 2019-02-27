import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"

class Enum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ""
    }
  }

  static propTypes = {
    options: propTypes.array,
    valueConsumer: propTypes.func
  }

  saveAll = option => {
    this.setState({selected: option})
    this.props.valueConsumer(option)
  }

  render () {
    return (
      <Button.Group>
        {this.props.options.map(option => (
          <Button
            active={this.state.selected === option}
            onClick={() => this.saveAll(option)}>{option}</Button>
        ))
        }
      </Button.Group>
    )
  }
}

export default Enum
