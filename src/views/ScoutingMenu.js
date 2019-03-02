import React from "react"
import { Subscribe, Provider } from "unstated"
import { MatchList } from "../components/match-list"
import { Route } from "react-router-dom"
import ScoutingMenuContainer from "../containers/scouting-menu-container"
import Match from "../components/scouting-menu/match/match"
import FormViewer from "./ViewerForm"
import ScoutingForm from "../components/ScoutingForm"
import * as tbaApi from "../connectors/tba-api/connector"
import * as configManager from "../util/config-manager"
import TeamsList from "../components/teams-list"
import { submitFieldForm } from "../connectors/mercury-api-connector"

function MatchesMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        console.log("matches")
        return <MatchList {...props} matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}

function TeamsMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        return <TeamsList {...props} teams={container.state.teams}/>
      }}
    </Subscribe>
  )
}

class ScoutingMenu extends React.Component {
  constructor (props) {
    super(props)
    this.container = new ScoutingMenuContainer()
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.container.setMatches(matches))
    tbaApi.fetchTeamsForTeamsList().then(teams => this.container.setTeams(teams))
  }

  render () {
    return (
      <Provider inject={[this.container]}>
        <Route
          exact
          path={`${this.props.match.path}/field/matches`}
          component={() => <MatchesMenu parentURL={`${this.props.match.path}/field`}/>}/>
        <Route
          path={`${this.props.match.path}/field/matches/:name`}
          component={() => <Match parentURL={`${this.props.match.path}/field/matches/scout/`}/>}/>
        <Route
          path={`${this.props.match.path}/field/matches/scout/:name/:team/`}
          component={(props) => (
            <ScoutingForm
              {...props}
              formConsumer={submitFieldForm}
              formPromise={configManager.getScoutingForm()}/>
          )}
        />
        <Route exact path={`${this.props.match.path}/pit/teams`} component={(props) => <TeamsMenu {...props}/>}/>
      </Provider>
    )
  }
}

export default ScoutingMenu
