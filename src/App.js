import React from "react"
import LoginView from "./views/LoginView"
import Homepage from "./views/Homepage"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: localStorage.getItem("key") || null
    }
  }

  updateKey(key) {
    this.setState({key})
  }

  render () {
    return <BrowserRouter>
      <Switch>
        <Route path="/" exact render={
          () => {
            if(this.state.key) {
              return <Homepage />
            } else {
              return <LoginView updateKey={this.updateKey.bind(this)} />
            }
          }
        } />
      </Switch>
    </BrowserRouter>
  }
}

export default App
