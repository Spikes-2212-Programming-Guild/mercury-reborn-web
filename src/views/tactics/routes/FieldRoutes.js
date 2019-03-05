import React from "react"
import { Route } from "react-router-dom"
import FieldHomepage from "../field/FieldHomepage"
import FieldMatchesMenu from "../field/FieldMatchesMenu"
import MatchesContainer from "../../../containers/matches-container"
import { fetchSavedFieldMatches, fetchSavedFieldTeams } from "../../../connectors/mercury-api-connector"
import { Provider } from "unstated"
import Match from "../../../components/scouting-menu/match/match"
import { fetchMatchesForScoutingMenu } from "../../../connectors/tba-api/connector"
import FieldMatchDataView from "../field/FieldMatchDataView"
import TeamsContainer from "../../../containers/teams-container"
import FieldTeamsMenu from "../field/FieldTeamsMenu"
import FieldTeamDataView from "../field/FieldTeamDataView"

export class FieldRoutes extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      matchesContainer: new MatchesContainer(),
      teamsContainer: new TeamsContainer()
    }
    fetchSavedFieldMatches().then(matchNames => {
      fetchMatchesForScoutingMenu(matchNames).then(matches => this.state.matchesContainer.setMatches(matches))
    })

    fetchSavedFieldTeams().then(teams => this.state.teamsContainer.setTeams(
      teams.sort((a, b) => (
        parseInt(a.replace("frc", "")) - parseInt(b.replace("frc", ""))))))
  }

  render () {
    console.log(this.props.match)
    return (
      <Provider inject={[this.state.matchesContainer, this.state.teamsContainer]}>
        <div>
          <Route path={`${this.props.match.path}/field`} exact component={FieldHomepage}/>
          <Route path={`${this.props.match.path}/field/match`} exact component={FieldMatchesMenu}/>
          <Route
            path={`${this.props.match.path}/field/match/matches/:name`}
            component={() => <Match parentURL={`${this.props.match.path}/field/match/view/`}/>}/>
          <Route
            path={`${this.props.match.path}/field/match/view/:match_name/:team_id`}
            component={FieldMatchDataView}/>
          <Route path={`${this.props.match.path}/field/teams`} exact component={FieldTeamsMenu}/>
          <Route path={`${this.props.match.path}/field/teams/:team_id`} component={FieldTeamDataView}/>
        </div>
      </Provider>
    )
  }
}