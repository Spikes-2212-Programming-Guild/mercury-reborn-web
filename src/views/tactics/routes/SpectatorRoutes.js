import React from "react"
import { fetchSavedSpectatorMatches } from "../../../connectors/mercury-api-connector"
import { Provider } from "unstated"
import { Route } from "react-router-dom"
import MatchesContainer from "../../../containers/matches-container"
import SpectatorMatchesMenu from "../spectator/SpectatorMatchesMenu"
import SpectatorMatchView from "../spectator/SpectatorMatchView"

export class SpectatorRoutes extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      matchesContainer: new MatchesContainer()
    }

    fetchSavedSpectatorMatches().then(matches => this.state.matchesContainer.setMatches(
      matches.map(match => {return {name: match}})
    ))
  }

  render () {
    return (
      <Provider inject={[this.state.matchesContainer]}>
        <Route path={`${this.props.match.path}/spectator`} exact component={SpectatorMatchesMenu}/>
        <Route path={`${this.props.match.path}/spectator/matches/:match_name`} component={SpectatorMatchView}/>
      </Provider>
    )
  }

}