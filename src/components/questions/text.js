import React from "react"
import {Input} from "semantic-ui-react"

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
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
