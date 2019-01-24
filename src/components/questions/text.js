import React from "react"
import {Input} from "semantic-ui-react"
import propTypes from "prop-types"

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      valueConsumer: this.props.valueConsumer
    }
  }

  static propTypes = {
    valueConsumer: propTypes.func
  }

  handleChange = (e, data) => {
    this.saveAll(data)
  }

  saveAll(data) {
    this.setState({text: data})
    this.state.valueConsumer(this.state.text)
  }

  render() {
    return (
      <Input onChange={this.handleChange().bind(this)} />
    )
  }
}

export default Text
