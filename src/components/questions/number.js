import React from "react"
import propTypes from "prop-types"
import {Button, Label, Input} from "semantic-ui-react"

class Number extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: this.props.min,
      num: this.props.min,
      helpers: this.props.helpers,
    }
  }

  handleMinusClick (e) {
    if(this.state.num > this.state.min)
      this.setState({num: this.state.num - 1})
  }

  handlePlusClick (e) {
    this.setState({num: this.state.num + 1})
  }

  handleChange(e, data) {
    this.setState({num: Number(data.value)})
  }

  render() {
    return (<div>
      {this.state.helpers ? <Button attached="left" onClick={this.handleMinusClick.bind(this)}>-</Button> : ""}
      {this.state.helpers ? <Label>{this.state.num}</Label> : <Input onChange={this.handleChange.bind(this)} />}
      {this.state.helpers ? <Button attached="right" onClick={this.handlePlusClick.bind(this)}>+</Button> : ""}
    </div>)
  }
}

Number.propTypes = {
  min: propTypes.number,
  num: propTypes.number,
  helpers: propTypes.bool
}

export default Number
