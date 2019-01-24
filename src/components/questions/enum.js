import React from "react"
import propTypes from "prop-types"
import {Button} from "semantic-ui-react"

class Enum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      set: this.props.set
    }
  }

  static propTypes = {
    options: propTypes.array,
    set: propTypes.func
  }

  handleClick(e, opt) {
    this.saveAll(opt)
  }

  saveAll(data) {
    this.setState({selected: data})
    this.state.set(this.state.num)
  }

  render() {
    return (<Button.Group>
      {this.state.options.map(opt => <Button active={this.state.selected === opt} onClick={e => this.handleClick(e, opt)}>{opt}</Button>)}
    </Button.Group>)
  }
}

export default Enum
