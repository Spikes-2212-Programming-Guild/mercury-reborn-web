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
      set: this.props.set,
    }
  }

  static propTypes = {
    min: propTypes.number,
    num: propTypes.number,
    helpers: propTypes.bool,
    set: propTypes.func,
  }

  handleMinusClick (e) {
    if(this.state.num > this.state.min) {
      this.setState({num: this.state.num - 1}).then(() => {this.state.set(this.state.num)})
    }
  }

  handlePlusClick (e) {
    this.setState({num: this.state.num + 1}).then(() => {this.state.set(this.state.num)})
  }

  handleChange(e, data) {
    if(data.value) {
      this.setState({num: parseInt(data.value)}).then(() => {this.state.set(this.state.num)})
    }
  }

  render() {
    return (<div>
      <Input
        type="number"
        labelPosition="right"
        className="ui labeled input"
        value={this.state.num}
        onChange={this.handleChange.bind(this)}
      >
        {this.state.helpers &&
        <Button className="label" onClick={this.handleMinusClick.bind(this)}>-</Button>}
        <input className="number-input" style={{textAlign: "center"}} />
        {this.state.helpers &&
        <Button className="label" onClick={this.handlePlusClick.bind(this)}>+</Button>}
      </Input>
    </div>)
  }
}

export default Number
