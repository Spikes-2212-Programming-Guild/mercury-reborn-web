import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Scouting from "./views/scouting"
import { initializeConnection } from "./connectors/tba-api/connector"
import Homepage from "./views/Homepage"
import Tactics from "./views/tactics"
import MainMenu from "./views/MainMenu"
import { Header } from "semantic-ui-react"

class App extends React.Component {
  constructor (props) {
    super(props)

    initializeConnection()
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header as={"h1"}>Mercury</Header>
          <MainMenu/>
          <br/>
          <Switch>
            <Route path="/scouting" component={Scouting}/>
            <Route path="/tactics" component={Tactics}/>
            <Route exact path="/" component={Homepage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
