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
    this.setState({text: data.value.toString()}).then(() => {
      this.state.set(this.state.num)
    })
  }

  render() {
    return (
      <Input onChange={this.handleChange().bind(this)} />
    )
  }
}

export default Text
