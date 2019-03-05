import React from "react"
import MatchesMenu from "../field/FieldMatchesMenu"

export default function SpectatorMatchesMenu (props) {
  return (
    <div>
      <MatchesMenu {...props} parentURL={`${props.match.path}`}/>
    </div>
  )
}