import React from "react"
import { Label, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Homepage (props) {
  return (
    <div>
      <Header as={"h1"}>Mercury</Header>
      <Label size={"massive"} horizontal basic>
        <Link to={"scouting/"}>Scout</Link>
      </Label>
    </div>
  )
}