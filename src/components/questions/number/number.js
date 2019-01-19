import React from "react"
import propTypes from "prop-types"
import {Button, Input} from "semantic-ui-react"
import "./style.css"

class Number extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: this.props.min,
      num: this.props.min,
      helpers: this.props.helpers,
    }
  }

  static propTypes = {
    min: propTypes.number,
    num: propTypes.number,
    helpers: propTypes.bool
  }

  handleMinusClick (e) {
    if(this.state.num > this.state.min)
      this.setState({num: this.state.num - 1})
  }

  handlePlusClick (e) {
    this.setState({num: this.state.num + 1})
  }

  handleChange(e, data) {
    this.setState({num: parseInt(data.value)})
  }

  render() {
    return (<div>
      <Input
        type="number"
        labelPosition="right"
        className="ui labeled input number-input"
        value={this.state.num}
        onChange={this.handleChange.bind(this)}
      >
        {this.state.helpers &&
        <Button className="label" onClick={this.handleMinusClick.bind(this)}>-</Button>}
        <input />
        {this.state.helpers &&
        <Button className="label" onClick={this.handlePlusClick.bind(this)}>+</Button>}
      </Input>
    </div>)
  }
}

export default Number
