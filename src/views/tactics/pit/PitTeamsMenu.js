import React from "react"
import TeamsMenu from "../../../components/scouting-menu/TeamsMenu"

export default class PitTeamsMenu extends React.Component {
  render() {
    return <TeamsMenu {...this.props} parentURL={`${this.props.match.path}`}/>
  }
}