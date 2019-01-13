import React from "react"
import Text from "../components/questions/text"
import Number from "../components/questions/number"
import Enum from "../components/questions/enum"

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Text />
        <Number min={1} />
        <Enum options={["uno", "dos", "tres"]} selected={"uno"} />
      </div>
    )
  }
}

export default Homepage
