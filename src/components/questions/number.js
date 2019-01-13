import React from "react"
import {Button, Label} from "semantic-ui-react"

class Number extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: this.props.min,
      num: this.props.min,
    }
  }

  handleMinusClick (e) {
    if(this.state.num > this.state.min)
      this.setState({num: this.state.num - 1})
  }

  handlePlusClick (e) {
    this.setState({num: this.state.num + 1})
  }

  render() {
    return (<div>
      <Button attached="left" onClick={(e) => this.handleMinusClick(e)}>-</Button>
      <Label>{this.state.num}</Label>
      <Button attached="right" onClick={(e) => this.handlePlusClick(e)}>+</Button>
    </div>)
  }
}

export default Number
