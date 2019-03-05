import React from "react"
import propTypes from "prop-types"
import { Button } from "semantic-ui-react"
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
    consumer: propTypes.func,
    supplier: propTypes.func
  }

  static defaultProps = {
    min: 0,
    num: 0,
    helpers: true
  }

  handleMinusClick = () => {
    this.saveAll(parseInt(this.props.supplier()) - 1)
  }

  handlePlusClick = () => {
    this.saveAll(parseInt(this.props.supplier()) + 1)
  }

  saveAll = n => {
    n = n ? n : 0
    const num = n > this.props.min ? n : this.props.min
    this.props.consumer(num)
    this.forceUpdate()
  }

  render() {

    return (
      <Button.Group fluid>
        {this.props.helpers ? <Button className="number-button" basic color="black" onClick={this.handleMinusClick}>-</Button> : ""}
        <Button basic color="black" className="input_button">{this.props.supplier()}</Button>
        {this.props.helpers ? <Button className="number-button" basic color="black" onClick={this.handlePlusClick}>+</Button> : ""}
      </Button.Group>
    )
  }
}

export default Number
