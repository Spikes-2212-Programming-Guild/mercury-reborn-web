import React from "react"

import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"

export default class FieldMatchesMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      <MatchesMenu {...this.props} parentURL={`${this.props.match.path}`}/>
    </div>
  }
}