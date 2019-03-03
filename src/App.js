import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScoutingMenu from "./views/scouting"
import {initializeConnection} from "./connectors/tba-api/connector"
import Homepage from './views/Homepage'

class App extends React.Component {
  constructor (props) {
    super(props)

    initializeConnection()
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/scouting" component={ScoutingMenu}/>
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
