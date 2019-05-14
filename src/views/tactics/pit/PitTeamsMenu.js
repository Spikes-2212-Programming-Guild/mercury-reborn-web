import React from "react"
import TeamsMenu from "../../../components/scouting-menu/TeamsMenu"

export default (props) => (<TeamsMenu {...props} parentURL={`${props.match.path}`}/>)
