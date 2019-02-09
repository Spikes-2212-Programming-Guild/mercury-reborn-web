import React from "react"
import propTypes from "prop-types"
import {Button} from "semantic-ui-react"

class Enum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      valueConsumer: this.props.valueConsumer
    }
  }

  static propTypes = {
    options: propTypes.array,
    valueConsumer: propTypes.func
  }

  saveAll = data => {
    this.setState({selected: data})
    this.state.valueConsumer(this.state.num)
  }

  render() {
    return (<Button.Group>
      {this.state.options.map(opt => <Button active={this.state.selected === opt} onClick={() => {this.saveAll(opt)}}>{opt}</Button>)}
    </Button.Group>)
  }
}

export default Enum
