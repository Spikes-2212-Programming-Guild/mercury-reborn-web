import React from "react"

import MatchesContainer from "../../../containers/matches-container"
import { fetchSavedFieldMatches } from "../../../connectors/mercury-api-connector"
import MatchesMenu from "../../../components/scouting-menu/MatchesMenu"
import { fetchMatchesForScoutingMenu } from "../../../connectors/tba-api/connector"

export default class FieldMatchesMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      matchesContainer: new MatchesContainer()
    }
    fetchSavedFieldMatches().then(matchNames => {
      fetchMatchesForScoutingMenu(matchNames).then(matches => this.state.matchesContainer.setMatches(matches))
    })
  }

  render () {
    return <div>
      <MatchesMenu {...this.props} parentURL={`${this.props.match.path}`}/>
    </div>
  }
}