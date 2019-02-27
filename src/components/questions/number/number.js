import React from "react"
import propTypes from "prop-types"
import {Button, Label} from "semantic-ui-react"
import "./style.css"

class Number extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: this.props.min
    }
  }

  static propTypes = {
    min: propTypes.number,
    num: propTypes.number,
    helpers: propTypes.bool,
    valueConsumer: propTypes.func
  }

  static defaultProps = {
    min: 0,
    num: 0,
    helpers: false
  }

  handleMinusClick = () => {
    this.saveAll(this.state.num - 1)
  }

  handlePlusClick = () => {
    this.saveAll(this.state.num + 1)
  }

  handleChange = (e, data) => {
    if(data.value) {
      this.saveAll(parseInt(data.value))
    }
  }

  saveAll = n => {
    n = n ? n : 0
    const num = n > this.props.min ? n : this.props.min
    this.setState({num})
    this.props.valueConsumer(num)
  }

  render() {

    return (
      <Button.Group>
        {this.props.helpers ? <Button onClick={this.handleMinusClick}>-</Button> : ""}
        <Button disabled color={"red"} inverted className="input_button">{this.state.num}</Button>
        {this.props.helpers ? <Button onClick={this.handlePlusClick}>+</Button> : ""}
      </Button.Group>
    )
  }
}

export default Number
