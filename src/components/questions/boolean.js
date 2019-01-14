import React from "react"
import Enum from "./enum"

function Boolean() {
  return (<div>
    <Enum options={["true", "false"]} />
  </div>)
}

export default Boolean
