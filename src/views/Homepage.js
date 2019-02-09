import React from "react"

import {Link} from "react-router-dom"
import {Label} from "semantic-ui-react"

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>

        <Label size={"massive"}><Link to={"/scouting-form/matches"}>Scout!</Link></Label>
      </div>
    )
  }
}

export default Homepage
