import React from "react"

import { Button, Input, Dropdown, Container } from "semantic-ui-react"

import { fetchLoginOptions, login as serverLogin } from "../connectors/mercury-api-connector"

class LoginView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: [],
      selected: null,
      password: ""
    }
    fetchLoginOptions().then(options => {
      this.setState({options})
    })
  }

  login () {
    serverLogin(this.state.selected, this.state.password).then(
      (data) => {
        console.log(data)
      })
  }

  render () {
    return (<div>
      <Container className="loginView">
        <Dropdown className="loginDropdown" fluid selection placeholder={"Select Login Option"}
          options={this.state.options}
          onChange={(e, data) => {
            this.setState({selected: data.value})
          }}/><br/>
        <Input className="loginPasswordInput" fluid type="password" onChange={(e, data) => {
          this.setState({password: data.value})
        }}/>
        <Button onClick={this.login.bind(this)}>Login</Button>
      </Container>
    </div>)
  }
}

export default LoginView
