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
      valueConsumer: this.props.valueConsumer,
    }
  }

  static propTypes = {
    min: propTypes.number,
    num: propTypes.number,
    helpers: propTypes.bool,
    valueConsumer: propTypes.func,
  }

  static defaultProps = {
    min: 0,
    num: 0,
    helpers: false
  }

  handleMinusClick = e => {
      this.saveAll(this.state.num - 1)
  }

  handlePlusClick = e => {
    this.saveAll(parseInt(this.state.num) + 1)
  }

  handleChange = (e, data) => {
    if(data.value) {
      this.saveAll(parseInt(data.value))
    }
  }

  saveAll = (n) => {
    const num = n > this.state.min ? n : this.state.min
    this.setState({num})
    this.state.valueConsumer(num)
  }

  render() {
    return (<div>
      <Input
        type="number"
        labelPosition={this.state.helpers && "right"}
        value={this.state.num}
        onChange={this.handleChange}>
        {this.state.helpers &&
        <Button className="label" onClick={this.handleMinusClick}>-</Button>}
        <input className="number-input" style={{textAlign: "center"}} />
        {this.state.helpers &&
        <Button className="label" onClick={this.handlePlusClick}>+</Button>}
      </Input>
    </div>)
  }
}

export default Number
