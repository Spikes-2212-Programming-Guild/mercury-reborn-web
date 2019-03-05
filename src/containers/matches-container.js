import { Container } from "unstated"
import * as _ from "lodash"

export default class MatchesContainer extends Container {

  constructor () {
    super()
    this.state = {
      matches: []
    }
  }

  setMatches(matches) {
    return this.setState({matches}).then(() => console.log(this.state))
  }

  getMatch(name) {
    console.log(this.state.matches)
    return _.filter(this.state.matches, match => match.name === name)[0]
  }

}