import React from "react"
import { Link } from "semantic-ui-react"

export default () => {
  return (
    <a href="/" className="conf-reset" onClick={() => localStorage.clear()}> Clear Storage</a>
  )
}

