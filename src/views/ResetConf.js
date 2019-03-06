import React from "react"
import { Link, Label } from "semantic-ui-react"

export default class Reset extends React.Component {
  render() {
    return (
      <Label href="/" basic className="conf-reset" onClick={() => localStorage.clear()}>Reset Forms</Label>
    )
  }
}
