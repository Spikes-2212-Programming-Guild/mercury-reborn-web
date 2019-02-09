import React from "react"
import Homepage from "./views/Homepage"
import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={Homepage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
