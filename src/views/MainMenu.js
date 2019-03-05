import React from "react"

import { Menu } from "semantic-ui-react"

import { withRouter } from "react-router-dom"

function MainMenu (props) {
  return (
    <div>
      <Menu widths={3} borderless fluid>
        <Menu.Item name={"Home"} onClick={() => props.history.push("/")}/>
        <Menu.Item name={"Scouting"} onClick={() => props.history.push("/scouting")}/>
        <Menu.Item name={"Tactics"} onClick={() => props.history.push("/tactics")}/>
      </Menu>
    </div>
  )
}

export default withRouter(MainMenu)