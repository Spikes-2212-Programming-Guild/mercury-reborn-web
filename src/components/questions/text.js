import React from "react"
import {Input} from "semantic-ui-react"
import propTypes from "prop-types"

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  static propTypes = {
    valueConsumer: propTypes.func
  }

  handleChange = (e, data) => {
    this.saveAll(data)
  }

  saveAll = data => {
    this.setState({text: data})
    this.props.valueConsumer(data)
  }

  render() {
    return (
      <Input onChange={this.handleChange} />
    )
  }
}

export default Text
