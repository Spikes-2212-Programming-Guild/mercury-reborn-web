import React from "react"
import Homepage from "./views/Homepage"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {Provider} from "unstated"
import ScoutingMenu from "./views/ScoutingMenu"
import {initializeConnection} from "./connectors/tba-api/connector"

class App extends React.Component {
  constructor (props) {
    super(props)

    initializeConnection()
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/scouting-form" component={ScoutingMenu}/>
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
