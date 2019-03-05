import React from "react"
import { Link } from "semantic-ui-react"

export default class Reset extends React.Component {
  render() {
    return (
      <a href="/" className="conf-reset" onClick={() => localStorage.clear()}> Clear Storage</a>
    )
  }
}
