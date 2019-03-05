import { Container } from "unstated"
import * as _ from "lodash"

class ScoutingMenuContainer extends Container {

  constructor () {
    super()
    this.state = {
      matches: [],
      teams: []
    }
  }

  /**
   * saves the given matches to state
   */
  setMatches(matches) {
    if (this.state.matches.length === 0) {
      return this.setState({matches})
    }
  }

  setTeams(teams) {
    return this.setState({teams})
  }

  /**
   * finds the match with the given name
   * @param name {string} the name of the target match
   * @returns {*} the match
   */
  getMatch(name) {
    return _.find(this.state.matches, match => match.name === name)
  }

}

export default ScoutingMenuContainer