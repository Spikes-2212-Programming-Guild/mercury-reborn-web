import React from "react"
import { fetchSavedSpectatorMatches } from "../../../connectors/mercury-api-connector"
import { Provider } from "unstated"
import { Route } from "react-router-dom"
import PitTeamsMenu from "../pit/PitTeamsMenu"
import MatchesContainer from "../../../containers/matches-container"

export class SpectatorRoutes extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      matchesContainer: new MatchesContainer()
    }

    fetchSavedSpectatorMatches().then(matches => this.state.matchesContainer.setMatches(
      matches.map(match => {return {name:match}})
    ))
  }

  render () {
    return (
      <Provider inject={[this.state.matchesContainer]}>
        <Route path={`${this.props.match.path}/spectator`} exact component={PitTeamsMenu}/>
        <Route path={`${this.props.match.path}/spectator/:match`} component={}/>
      </Provider>
    )
  }

}