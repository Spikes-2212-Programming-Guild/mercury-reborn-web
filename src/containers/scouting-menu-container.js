import {Container} from "unstated"
import { fetchMatchesForScoutingMenu } from "../connectors/tba-api/connector"
import * as _ from "lodash"

class ScoutingMenuContainer extends Container {

  constructor () {
    super()
    this.state = {
      matches: []
    }
  }

  /**
   * fetches all the matches from the tba api
   */
  fetchMatches() {
    fetchMatchesForScoutingMenu().then(matches => {
      if (this.state.matches.length === 0) {
        return this.setState({matches})
      }
    })
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