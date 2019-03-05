import React from "react"
import { TextArea } from "semantic-ui-react"
import propTypes from "prop-types"

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  static propTypes = {
    consumer: propTypes.func,
    supplier: propTypes.func
  }

  handleChange = (e, data) => {
    this.saveAll(data)
  }

  saveAll = data => {
    this.setState({text: data.value})
    this.props.consumer(data.value)
  }

  render() {
    return (
      <TextArea onChange={this.handleChange}>{this.props.supplier()}</TextArea>
    )
  }
}

export default Text
