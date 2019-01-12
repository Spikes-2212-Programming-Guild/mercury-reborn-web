import React from "react"
import LoginView from "./views/LoginView"
import Homepage from "./views/Homepage"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: localStorage.getItem("key") || "-1"
    }
    this.updateKey = this.updateKey.bind(this)
  }

  updateKey(key) {
    this.setState({key: key})
  }

  render () {
    return <BrowserRouter>
      <Switch>
        <Route path="/" exact render={
          () => {
            switch(this.state.key) {
            case "-1":
              return <LoginView updateKey={this.updateKey} />
            default:
              return <Homepage />
            }
          }
        } />
      </Switch>
    </BrowserRouter>
  }
}

export default App
