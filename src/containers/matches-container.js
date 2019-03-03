import {Container} from "unstated"
import * as _ from "lodash"

export default class MatchesContainer extends Container {

  constructor () {
    super()
    this.state = {
      matches: []
    }
  }

  setMatches(matches) {
    this.setState({matches})
  }

  getMatch(name) {
    return _.filter(this.state.matches, match => match.name === name)
  }

}