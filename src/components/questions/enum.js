import React from "react"
import propTypes from "prop-types"
import {Button} from "semantic-ui-react"

class Enum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
    }
  }

  static propTypes = {
    options: propTypes.array
  }

  handleClick(e, opt) {
    this.setState({selected: opt})
  }

  render() {
    return (<div>
      {this.state.options.map(opt => <Button active={this.state.selected === opt} onClick={e => this.handleClick(e, opt)}>{opt}</Button>)}
    </div>)
  }
}

export default Enum
