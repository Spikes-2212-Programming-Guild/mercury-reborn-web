import React from "react"
import Text from "../components/questions/text"
import Number from "../components/questions/number"

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Text />
        <Number min={1} />
      </div>
    )
  }
}

export default Homepage
