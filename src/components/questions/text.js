import React from "react"
import {Input} from "semantic-ui-react"

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <Input onChange={(e, data) => this.setState({text: data.value.toString()}).then(() => {this.state.set(this.state.num)})} />
    )
  }
}

export default Text
