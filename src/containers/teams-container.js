import { Container } from "unstated"
import * as _ from "lodash"

export default class TeamsContainer extends Container {
  constructor () {
    super()
    this.state = {
      teams: []
    }
  }

  setTeams(teams) {
    return this.setState({teams})
  }

  getTeam(name) {
    return _.filter(this.state.teams, team => team === name)
  }


}