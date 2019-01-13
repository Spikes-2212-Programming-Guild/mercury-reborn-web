import React from "react"
import Enum from "./enum"

export default function Boolean(props) {
  return (<div>
    <Enum options={["true", "false"]} selected={props.selected} />
  </div>)
}
