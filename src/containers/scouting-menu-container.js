import {Container} from "unstated"
import { fetchMatchesForScoutingMenu } from "../connectors/tba-api/connector"

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
   * @param matchName {string} the name of the target match
   * @returns {*} the match
   */
  getMatch(matchName) {
    return this.state.matches.filter(match => (match.comp_level + match.number) === matchName)[0]
  }

}

export default ScoutingMenuContainer