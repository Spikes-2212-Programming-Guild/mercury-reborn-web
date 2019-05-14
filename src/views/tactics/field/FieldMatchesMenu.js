import React from "react"

import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"

export default (props) => (
  <div>
    <MatchesMenu {...props} parentURL={`${props.match.path}`}/>
  </div>
)